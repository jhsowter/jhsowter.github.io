---
layout: post
title: "Kubernetes kubernetes"
tags: kubernetes
    
---
Kubernetes. 

Kubernetes?  

Kubernetes kubernetes!  

That's right, everybody wants them some sweet, sweet k8 in their lives.  

I watched a guy talk about kubernetes for a full day so you don't have to, and here's what I advise to you, senior developer who has been doing development for years and knows most stuff, but just hasn't got around to K, let alone the other syllables just yet.  

I can tell you a few things about what kubernetes is, but I can't tell you everything, or even everything you need to know. For all I know, you will need to know stuff that wasn't even covered in my course. You see, I did "core concepts for developers", which I believe is tech evangelist speak for sweet ____ all.  

Like so much in tech, when we ask "what is X technology?" we prefer to ignore that question and answer a different question instead "how do I use X?" It's as if someone asked "what is language?" and we told them "language is how if I want to know something, I form words with my mouth and ask a question" instead of saying "It's symbols and grammar" which is probably a better approximation for what language actually is, but it doesn't sound practical. And us developers of the 2020s, we always like to be practical. We want to answer like this: "kubernetes is how you win!" 

So, let's get practical. Kubernetes is a way of managing docker containers. Managing here means creating, deploying, updating, load balancing, managing secrets, all the good stuff which you don't get by default when you just have docker on some machine.  

When docker arrived years ago, everyone was like "don't you see? We can easily create new instances of applications and scale and do zero downtime deployments and... and (dribbling with excitement) all that stuff!" Except, docker doesn't do all that stuff. Well, docker swarm did, but then everyone said not to use that in production.  

So kubernetes is some software that manages all the machines you want to deploy containers to and actually delivers those features that containers were always supposed to make possible.  

Like I said, I know sweet ____ all about how it actually works under the hood BUT what the elite will tell you is that there is a manager, and there are nodes. The manager is some software installed on a machine somewhere, and the nodes are machines where we want to run our containers.  

So if you want to create a node, you go and install a kubelete on it. And then it becomes a node. I have no idea how to do that. So far so distributed-computing.  

A node is just the host for some containers, but you don't just remote into the node and `docker run` some containers. That would just... How would that even work? So nodes instead have pods. Pods. Remember that name. It's an arbitrary name but I guess the analogy is that aren't the peas, but they contain the peas. And the peas in this case are containers. Containers contained in a pod. Yes. Nothing wrong with that analogy at all.    

 

Ok let's get a bit more real. If you run a web server in a container, you know you need to map the port and stuff, and how are you going to do networking if you have multiple of those container instances running on different machines (nodes)? Well, all that stuff is what the pod is for. Kubernetes sorts all that stuff out (somehow, I don't know). You create a pod, which also by definition has a container in it, and kubernetes will give it an IP and stuff.  

 

I forgot to mention that nodes all live together in a namespace called a cluster. The cluster is managed by the manager thingy. I think. Anyway. You can use kubernetes to find the IPs of the pods and the internal names of the pods and stuff.  

 

Before I talk about replica sets and deployments, let's take stock for a second. So, what is kubernetes actually? It's some software that runs on a manager machine, and it's some software that runs on a node (kubelet). But it's also a cli called `kubectl` (pronounced "cube control").  

 

Kubectl works the same way every cli works these days. It just calls a rest API. And the rest API is exposed on the manager machine. Simple really. The point is, you can do all the stuff by using the kubectl command line. Create pods, list them, and so on. You can execute commands on the containers running in a pod, on a node, using kubectl, if you want to. So you're definitely going to use it to do troubleshooting and experimentation and stuff.  

 

But nobody wants their devops to be just a bunch of bash files. Actually I don't mind, but you know someone is going to come along and complain about declarative vs imperative and so on. Anyway, the guys who made kubernetes knew what was up, so they did declarative yaml files and so that's what you're going to actually want to do. Not just hammer away at a cli like a primitive.  

 

So, back to pods. I'm no computer scientist, but if I wanted my containerised application to actually have some redundancy, I would want the thing running on at least two different machines in different places so that if one of them died, the other one would keep going. And if I got a tonne of traffic to my little website, I'd want to yell "webscaaaale!" and click a button, slide a slider, or even just sit back in my leather armchair while an algorithm automatically scaled my containers out for me. The point is, pods on their own aren't enough. You need replica sets. But they apparently were a bit low level so you don't need them, you need something called "deployments" which create replicate sets for you.  

 

A deployment in kubernetes can be defined declaratively in a yaml file, and it can say how many pods you want, and can contain other stuff you might need too like storage and configs and stuff. The point is, you don't go around creating pods yourself, You just describe the pods in one section of the yaml, and describe the deployment in another. Then basically just go `kubectl create deployment -f my-file.yaml` and kubernetes creates your deployment for you, which creates replica sets, which creates pods, and probably other stuff too like I mentioned.  

 

Kubernetes makes sure your stuff is up. It does not stand to have stuff down. It does. not. stand! If you delete your own pod, kubernetes will create it again. It will be like "hmm. The deployment said you wanted 2 pods running the website, but now there's only one. I'm gonna fix that". So if you actually want to delete stuff, you need to delete the deployment, not just the other resources like pods.  

 

I could go on but you get the point. Kubernetes isn't an AWS thing or a an Azure thing. It doesn't really know much about software or hardware. It lives in an in-between world, where it manages nodes in a cluster, that contain pods which are all your container instances running, so you can not worry about the details about how things are networked and replicated, but just say you want two web services containers and one database container, and go. See? I answered that "what is it" question with "here's why." At some point I will learn what it actually is, but for now I can totally just go and use it.  

 

---- 

Oh you're back. What? You told your mum you knew kubernetes and she was like "o rly? How can I have one container talk to another set of scaled containers in a cool, micro-servicy type of way" and you probably thought "that idiot didn't actually tell me that. WTF?"  

 

Yeah I forgot to mention one other key concept in kubernetes which is a service. A service is an abstraction where you basically give a bunch of pods a name, and the internal cluster DNS gets set up for you so you can address the pods as one service. It takes care of all the load balancing and stuff for you. Without this concept of a service you would be left setting up all your load balancing and DNS yourself, and the whole point of kubernetes is to sort stuff like that out really.  

 

So you just put another bit into your yaml file which describes the service, and the service mentions which pods it is about. And if you call it "backend" you can actually call "http://backend" in some other container in some other pod within the cluster and it kind of just works (well you need to map to port80 and stuff but you get the idea).  

 

The thing about load balancing though is it need a bit of information to work. If you are going to have ephemoral containers that you can destroy and recreate any time, you gotta have a way to let the load balancer know the actual thing is ready. The point I'm getting to is that kubernetes has these things called probes. There's athing called a liveness probe. It pokes the pod to see if it's alive. And there is also a readiness probe. Because being alive doesn't necessarily mean you're good to go. Sometimes it takes a second to warm things up so to speak. So kubernetes has these two types of probes, and you can do it in different ways. You can just execute a command on the container, or you can hit it over http or tcp. How you actually want to do that would depend on the thing that's in the container. But for example, I worked on a .net core web API where I just had a "/health" and "/ready" endpoint which returns an empty 200 response. Kubernetes uses this to make sure the pod is ready, and I imagine that's used to make services work, amongst other things. But honestly I don't exactly know how it works. Because computer science, you can put in a few extra parameters into these probes to say stuff like "wait 15 seconds before even bothering to check for liveness and don't do it any more frequently that every 2 seconds" and stuff like that.  

 

So while we're talking about this, you're probably thinking "well if I have this load balancer and readiness checks, it should be a piece of cake to do blue/green deployments and stuff" and yeah, it is and it's built into the kubernetes deployment anyway. There are a few types of deployments - rolling, blue/green, canary and rollback. The odd one out is rollback obviously. I actually don't know much about deployments but I can tell you by default, kubernetes uses rolling deployment which means it will bring in a new pod which has the updated container running in it, and then kill off one of the old ones, and continue until all the old ones are gone and it's just new ones. This means your service better handle having side-by-side versions. If that isn't possible then you probably need one of the other deployment types, but would you believe they didn't even cover that in the core concepts course! I bet you could read up on it in like 15 minutes though.   

Thanks for reading and remember to always kubernetes. 