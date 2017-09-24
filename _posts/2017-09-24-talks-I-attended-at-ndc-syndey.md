---
layout: post
title: "Talks I attended at NDC Syndey 2017"
tags:
    NDC
    Videos
    C#
---
I was lucky enough to attend [NDC Sydney 2017](https://ndcsydney.com/). I was there for 3 days of talks. Here are the talks I attended and a few notes to whet your appetite. 

I've tried to find the relevant video links, but most are from NDC London or Oslo, or another conference, so I can't vouch for them being exactly the as what I saw. I put the talks in chronolocial order. You will the headers are links to the NDC website and to the speaker's blog, twitter or whatever came up top in a google search. 

What's my top 3, I hear you ask? I have to put Jennifer Marsman at number one, because what she did was just so maniacal. I absolutely loved the history of .NET by Richard Campbell, and for number 3 it's hard not to mention Troy Hunt's Cyber talk, although his career hacking one is very good also. I will say that Bart De Smet's talks on C# are equal third because they were the other standout part of the conference for me. 

## Day 1
### [Jennifer Marsman](https://blogs.msdn.microsoft.com/jennifer/) - [Using EEG and Machine Learning to Perform Lie Detection](https://ndcsydney.com/talk/keynote-using-eeg-and-machine-learning-to-perform-lie-detection/)
##### video link to NDC London 2017 [here](https://www.youtube.com/watch?v=-7WRQFclEA8)

Her talk was the highlight of the conference.

### [Sam Newman](http://samnewman.io/) - [Confusion in the Land of Serverless](https://ndcsydney.com/talk/confusion-in-the-land-of-the-serverless/)
##### video link to NDC Oslo 2017 [here](https://www.youtube.com/watch?v=CrS0HVQZiQI)
What does serverless mean? PaaS. That's what they meant when they coined the phrase, because it was around in 2012. The second thing that struck a chord was what he called circuit breakers and how it's still a an unsolved problem in cloud architectures. In a nutshell, when you have a highly scalable infrastructure connecting to a single instance of something that doesn't scale, nobody knows what to do and stuff explodes. 

### [Felipe Hoffa](https://medium.com/@hoffa) - [What Can We Learn From 750 Billion Github Events and 42 Terabytes of Code](https://ndcsydney.com/talk/what-can-we-learn-from-750-billion-github-events-and-42-tb-of-code/)
##### video link to DevoxxUK talk of the same title [here](https://www.youtube.com/watch?v=QuCugLgzP3E)
Really friendly and cool guy who works at google. He showed us how to select * from Github Join Stackoverflow and basically blew my mind!

Also his blog is pretty awesome.

### [Richard Banks](https://www.richard-banks.org/) - [The Technical Debt Prevention Clinic](https://ndcsydney.com/talk/technical-debt/)
##### Talk of the same title at Ignite 2017 [here](https://www.youtube.com/watch?v=hJBIAlHsYsM)
Richard has a simple message: take your time writing code so you can do it properly, and learn to explain this to your boss. 

Full disclosure, Richard works at the same company as me, and I have attended his training classes. He is always worth listening to. 

### [Bart De Smet](https://channel9.msdn.com/Events/Speakers/Bart-De-Smet) - [C# Language Internals](https://ndcsydney.com/talk/c-language-internals/)
##### Talk of the same title at TechDays 2016 [here](https://channel9.msdn.com/Events/TechDays/Techdays-2016-The-Netherlands/C-Language-Internals)
Use Windbg and ildasm until you can compile code in your head so you never, ever write code that performs badly. Bart De Smet is really cool and that's what he did and now he uses notepad for development because he can compile with HIS EYES. 

But more seriously, I intend to use these tools more often, because they allow you to dig into things and discover the source of performance problems. 

### [Edith Harbaugh](https://www.linkedin.com/in/edithharbaugh/) - [Software and the Art of Bicycle Maintenance](https://ndcsydney.com/talk/software-the-art-of-bicycle-maintenance/)
##### No video, but I found this decent [article](http://firstround.com/review/startups-software-development-and-the-art-of-bicycle-maintenance/) on the subject. 
Starting a new business is a bit like riding your bike all the way across the US, but harder. I think this was supposed to be encouraging. A very interesting story about some life lessons and the experience of cycling across a continent. 

### [Filip W](https://www.strathweb.com/) - [C# Scripting in the .NET Core World](https://ndcsydney.com/talk/c-scripting-in-the-net-core-world/)
##### Talk of the same name at mini NDC Copenhagen 2017 [here](https://www.youtube.com/watch?v=Tr5o3bPjaxM)
C# scripting is actually a good idea and beats writing a console app or winforms app just in order to run some C# code. Csi or dotnet is probably already on your machine, so use that next time. I actually had to leave this talk early so I haven't seen the whole thing and there is probably more to it than that, but even the part I saw was good so... Cool! 

## Day 2

### [Barbara Fusinka](https://twitter.com/basiafusinska?lang=en) - [TensorFlow In Three Sentences](https://ndcsydney.com/talk/tensorflow-in-three-sentences/)
##### Her Katacoda course is [TensorFlow in three sentences](https://host02.katacoda.com/basiafusinska/courses/tensorflow-in-3-sentences)
All you need to start using TensorFlow is a PHD is neural networks and advanced maths. If that doesn't put you off, look at Barbara's katacoda. It's got docker in in so that's two buzzwords at once. 

### [Troy Hunt](https://www.troyhunt.com/) - [Hack Your Career](https://ndcsydney.com/talk/hack_your_career/)
##### Talk of the same name at NDC Oslo 2017 [here](https://www.youtube.com/watch?v=-MUhcgXBj_A)
Writing a blog and speaking is basically all you need to do to double your income and become a (tech) celebrity. I think you also need to be a tall, good looking genius but that wasn't discussed. People abuse you online when you are even a tiny bit famous but some people will give you free beer so it's worth it. 

### [Bart De Smet](https://channel9.msdn.com/Events/Speakers/Bart-De-Smet) - [Writing High Performance C#](https://ndcsydney.com/talk/writing-high-performance-code-in-net/)
##### Link to talk of the same title from Øredev 2015 [here](https://vimeo.com/144809641)
See above. Not sure how much his talk has changed since 2015. 

### [Troy Hunt](https://www.troyhunt.com/) - [_ _ Cyber](https://ndcsydney.com/talk/something-something-cyber/)
##### Talk of the same name at NDC London 2017 [here](https://www.youtube.com/watch?v=-dUAu-ztGcA)
_ _ Cyber was an entertaining look into security. I personally have seen most of Troy's material one way or another, but it was still enjoyable to revisit these things and reinforce. Highly recommended. 

### [Richard Campbell](https://twitter.com/richcampbell) - [The History of .NET](https://ndcsydney.com/talk/the-history-of-.net/)
##### Same title talk [here](https://www.youtube.com/watch?v=FFCn_z7dn_A) at a .NET user group (presumably in Syndey) 
It's story time with Richard Campbell and he tells a great story. Of all the talks, this one really engaged me the most, I hardly noticed the time pass. He provided a great narrative of everything that's happened from a .NET perspective since the first version of basic. There probably aren't many people who can tell this story so well and in such a particular way.

### [Louis DeJardin](https://twitter.com/loudej) - [Microservices at Scale - ASP.NET Core, Service Fabric, and Azure in production](http://ndcsydney.com/talk/microservices-at-scale/)
Louis works on Bing and I noted that they deploy multiples times in a day. Louis spoke about their CI pipelines and how they setup a search engine which scales. Spoiler alert, they use service fabric. 

I couldn't find links online to any videos or articles by Louis unfortunately. 

### [Michele Leroux Bustamante](https://michelebusta.com/) - [Embracing Docker simplicity - while harnessing platform power](https://ndcsydney.com/talk/embracing-docker-simplicity---while-harnessing-platform-power/)
##### Talk of a similar name at NDC London 2017 [here](https://www.youtube.com/watch?v=_CWpwTymxDI)
In an epic session, Michele demo'd just about every container management system out there. My key take away was that they are very similar, some of them hide the management nodes from you as part of the management system, whereas other (well, swarm) don't. Other key advice is to constrain your container's memory and CPU so that you can predict usage and allow things to scale. Another thing is to be aware that scaling too fast can cause problems, since you don't know how much normal usage will spike, and you may not even want to scale too big if it will cost you a lot of money. 


## Day 3 
### [Scott Wlachin](https://fsharpforfunandprofit.com/) - [Domain Modeling Made Functional](https://ndcsydney.com/talk/domain-modeling-made-functional/) 
##### Same titled talk at NDC Oslo 2017 [here](https://www.youtube.com/watch?v=Up7LcbGZFuo)
A talk I've been waiting for, Scott points out there is no contradiction in using DDD and functional. If you don't believe me, you can go read his book. His talk is also an advertisement for functional languages. 

### [Azadeh Khojandi](http://azadehkhojandi.blogspot.com.au/) and [Jordan Knight](https://twitter.com/jakkaj) - [Chat Bots - The Next UI](https://ndcsydney.com/talk/chatbots-the-next-ui/)
##### Similar talk by Azadeh at DDD Sydney 2017 [here](https://www.youtube.com/watch?v=p_6obejd1nc)
This was essentially a code demo of the kinds of tools and patterns used by Microsoft in their bot development. I was particularly impressed with [k-scratch](https://github.com/jakkaj/k-scratch-node), which pushes your code up to azure every time you save! 

### [Scott Allen](http://odetocode.com/about/scott-allen) - [Building Resilient Applications In Microsoft Azure](https://ndcsydney.com/talk/building-resilient-applications-in-microsoft-azure/)
##### Talk of the same name at NDC Oslo 2017 [here](https://www.youtube.com/watch?v=CeAm6f_YzAU)
Scott enumerates good patterns for scale and reliability when using the various Azure offerings, and points out where some of the more confusing alternatives can be used for similar results, and even talks about connection retries and disaster recovery, which are often left off from talks like this. 

### [Stephen Haunts](https://stephenhaunts.com/) - [Hacking Humans : Social Engineering Techniques and How to Protect Against Them](https://ndcsydney.com/talk/hacking-humans-social-engineering-techniques-and-how-to-protect-against-them/)
##### Same talk at NDC London 2017 [here](https://www.youtube.com/watch?v=_MLpZZBD-ps)
Stephen discusses the finer points of social engineering, pointing out ways to reduce your risk for both you and the company you work for. He also recommends a few books which are now on my reading list. Anything by Kevin Mitnick, anything about Frank Abagnale and Charles Ponzi, "Social Engineering" by Christopher Hadnagy and "What everybody is saying" by Joe Navarro.

### [Enrico Buonanno](https://twitter.com/la_yumba?lang=en) - [Logic vs. side effects: functional goodness you don't hear about](https://ndcsydney.com/talk/logic-vs-side-effects-functional-goodness-you-dont-hear-about/)
This session was about how to write functional C#. I didn't particularly agree with some of the early statements in this talk, and I feel like the examples are contrived and wouldn't recommend anybody program in C# using the techniques described. Finally, Enrico discussed the use of monads without explaining what they are, which automatically makes this one of "those" functional talks. I didn't like this session much, but a colleague of mine who knows more about functional programming than I do did seem to like it, so I'll still include it here. 

### [Rob Moore](https://robdmoore.id.au/) and [Matt Davies](https://twitter.com/mdaviesnet) - [App deployment PaaS battle!](https://ndcsydney.com/talk/app-deployment-paas-battle/)
These guys take on the massive task of deploying a web API with 4 different technologies in order to compare them. In doing so, they describe the criteria they use to rate each option, which is essentially describing process we need to go through when we choose tech in our jobs. They did Azure App Service, Elastic Beanstalk, Service Fabric and Service Fabric Guest process. 

I also work at the same company as both of these people, just so you know. 