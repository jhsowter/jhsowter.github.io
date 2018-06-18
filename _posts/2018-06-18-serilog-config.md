---
layout: post
title: "Configure .NET Core to use Serilog"
tags:
    .NET
    .NET-core
     Serilog
     Seq
     C#
    
---
One of the first things I want to do after I `dotnet new mvc` or something like that, is switch the logging over to Serilog, and start logging to my local [Seq](https://getseq.net/) server. I also want Serilog to take the place of the default console logger, but I still want to use `Microsoft.Extensions.Logging.ILogger` because, well, it's there. 

Here's some generic configuration code to do it. 

You'll need these package references (version numbers destined to be out-of-date): 
~~~ xml
    <PackageReference Include="Serilog" Version="2.7.1" />
    <PackageReference Include="Serilog.AspNetCore" Version="2.1.1" />
    <PackageReference Include="Serilog.Settings.AppSettings" Version="2.1.2" />
    <PackageReference Include="Serilog.Settings.Configuration" Version="2.6.1" />
    <PackageReference Include="Serilog.Sinks.Console" Version="3.1.1" />
    <PackageReference Include="Serilog.Sinks.Seq" Version="4.0.0" />
~~~

Then following the advice [here](https://github.com/serilog/serilog), [here](https://github.com/serilog/serilog-aspnetcore), [here](https://github.com/serilog/serilog-settings-configuration) and [here](https://github.com/serilog/serilog-sinks-seq). 

Ultimately I end up this:

~~~ csharp
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseSerilog()
                .UseStartup<Startup>();

        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(config)
                .CreateLogger();

            try
            {
                CreateWebHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }
    }
~~~

What's important to note here is
 - the log is always flushed when the application exits. 
 - `UseSerilog()` is part of the Serilog.AspNetCore package and it basically redirects the vanilla .net core logs through Serilog. 
 - I've configured the .net core application to load settings from `appsettings.json` and put my Serilog settings there. 
 - There is a Seq sink configured as well, since I tend to have Seq server installed locally. 

~~~ json
{
  "Serilog": {
    "Using":  ["Serilog.Sinks.Console", "Serilog.Sinks.Seq"],
    "MinimumLevel": "Debug",
    "WriteTo": [
      { "Name": "Console" },
      { "Name": "Seq", "Args": { "serverUrl": "http://localhost:5341" } }
      
    ],
    "Enrich": ["FromLogContext", "WithMachineName", "WithThreadId"],
    "Destructure": [
      { "Name": "With", "Args": { "policy": "Sample.CustomPolicy, Sample" } },
      { "Name": "ToMaximumDepth", "Args": { "maximumDestructuringDepth": 4 } },
      { "Name": "ToMaximumStringLength", "Args": { "maximumStringLength": 100 } },
      { "Name": "ToMaximumCollectionCount", "Args": { "maximumCollectionCount": 10 } }
    ],
    "Properties": {
		"Application": "Sample"
    }
  },
  "AllowedHosts": "*"
}
~~~

Now I get logging to the console and to Seq, which is a good start. 