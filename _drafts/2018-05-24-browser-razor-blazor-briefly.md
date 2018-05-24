---
layout: post
title: "Browser, Razor, Blazor, Briefly"
tags:
    .NET
    C#
    Blazor
    WebAssembly
---
[WebAssembly](https://webassembly.org/) promises native-speed apps in our browsers, and opens the gates for all programming languages by being a compilation target. [Blazor](https://blazor.net/) is the .NET flavour of WebAssembly frameworks, just [recently released](https://blogs.msdn.microsoft.com/webdev/2018/03/22/get-started-building-net-web-apps-in-the-browser-with-blazor/) as an alpha, made possible since [mono was compiled to WebAssembly](http://www.mono-project.com/news/2017/08/09/hello-webassembly/). 

Here's some a few things to know about it. 

*Code snippets from [https://blazor.net](https://blazor.net)* 

## It's experimental
Don't use it for anything real just yet. It's considered an alpha, and could either change drastically or disappear. Having said that, there is a lot of [excitement](https://blogs.msdn.microsoft.com/webdev/2018/03/22/get-started-building-net-web-apps-in-the-browser-with-blazor/) about it (from .NET developers anyway) and if WebAssembly lives up to its promises, then Blazor seems like just the right way to bring in .NET

## It's web components with razor pages
A component in Blazor looks like this: 

~~~
@page "/counter"

<h1>Counter</h1>

<p>Current count: @currentCount</p>

<button class="btn btn-primary" onclick="@IncrementCount">Click me</button>

@functions {
    int currentCount = 0;

    void IncrementCount()
    {
        currentCount++;
    }
}
~~~

[Razor](https://docs.microsoft.com/en-gb/aspnet/core/mvc/views/razor?view=aspnetcore-2.0) is an awesome, intelligent, terse syntax for server generated HTML that's been in use in ASP.NET since MVC 3 in [about 2010](https://weblogs.asp.net/scottgu/introducing-razor). 

## There's DLLs in your browser now
When you load a Blazor app and open the network tab in chrome tools, it looks like this: 

![DLLs in your browser](/images/dll-in-browser.png){:class="img-responsive"}
  
These are plain old DLLs from the .NET framework, or compiled by `dotnet build`, shipped over the wire to your browser so the mono runtime can load them. If you're thinking this is going to bloat the size of the application a lot, the mono linker removes unused assemblies from the build. The template app is less than 2MB over the wire, which seems pretty good for an experiment. 


## It's NOT Silverlight
"As you can see, Blazor is **not** just a new Silverlight."[^1] There will be no XAML (look at [Ooui](https://github.com/praeclarum/Ooui) for that). 

## Blazor.js ties it all together
Blazor.js contains the code that initialises the mono runtime and loads the assemblies. You can see the typescripted [bootstrapper](https://github.com/aspnet/Blazor/blob/dev/src/Microsoft.AspNetCore.Blazor.Browser.JS/src/Boot.ts)

![DLLs in your browser](/images/blazorjsbootstrap.png){:class="img-responsive"}

 This code looks at the element in the DOM that lists the assemblies needed for the app to run, and loads them. 

## It's got dependency injection
DI is something I just can't live without in a complex codebase, and something I still desire in simple ones. Blazor components get injected either by using the `@inject` syntax or just by including a parameter in constructor of the component's class. 

~~~
@page "/customer-list"
@using Services
@inject IDataAccess DataRepository

<ul>
    @if (Customers != null)
    {
        @foreach (var customer in Customers)
        {
            <li>@customer.FirstName @customer.LastName</li>
        }
    }
</ul>
~~~

## Routing is setup in the component
Right now, routing is achieved by simply placing the relative route in the component alongside the `@page` declaration, as in the above `@page "/customer-list"`. You can resolve multiple routes to the same component by listing multiple `@page`s, and parameters are supported with a combination of placeholders and attributes. 

~~~
@page "/RouteParameter"
@page "/RouteParameter/{text}"

<h1>Blazor is @Text!</h1>

@functions {
    [Parameter]
    private string Text { get; set; } = "fantastic";
}
~~~

## People are already keen
"Browser + Razor = Blazor", and despite the miscreant "l", I can forgive it because it sounds better than "Brazor". But it's not easy to combine into other cool-sounding names. But the point is, [people creating things](https://github.com/search?utf8=%E2%9C%93&q=blazor&type=) with it and it's just a matter  of time before we have some frankensteinian mashups of flux, bootstrap and so on. 

What would you call the jQuery API for Blazor? jBlazedly? I called  it. 

Get started with Blazor here: [https://blazor.net/docs/get-started.html](https://blazor.net/docs/get-started.html)

[^1]: https://learn-blazor.com