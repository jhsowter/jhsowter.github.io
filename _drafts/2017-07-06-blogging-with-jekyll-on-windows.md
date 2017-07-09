---
layout: post
title: Jekyll on Windows with Docker
---

Jekyll is a great blogging engine, not least because Github Pages will run it, allowing you to host a website for free. Jekyll is a fast, device compatible and SEO friendly way to host website, because it generates static content, meaning minimal server and client processing is involved when viewing a page.

Although you can get by without it, running Jekyll on your local machine allows you to test site generation to see how things look before you push your changes to the server. Jekyll requires quite a [few dependencies to be installed][1]. This is a bit of an exuberance if Jekyll is the only reason you would use them. Luckily, there's ~~an app~~ a container for that. I can just pull down the official Jekyll image, and I can now have my free blog without installing ruby. I still need to learn the ins and outs of Jekyll, but it's a nice case study in using Docker to get something done. 

I got started with Docker by simply working through their [official tutorials](https://docs.docker.com/), and learn the basics of [Github pages here](https://pages.github.com/).

Here's how to get a default Jekyll site going, running it in a docker image locally, assuming you have a github pages repo, and that you have docker installed. 
#### Get the official Jekyll images from Docker Hub  
~~~
C:\Users\Jack> docker pull jekyll/jekyll
~~~

#### Create a new Jekyll site
You will want to clone your github pages repository, and create a site there. 

~~~
C:\Users\Jack> git clone <the github pages repo uri>
~~~

The [Jekyll docker](https://github.com/jekyll/docker) page says how to run it, with the volume mapping to the directory where your site will live. 

~~~
C:\Users\Jack> cd jack.github.io
C:\Users\Jack\jack.github.io> docker run --rm -v  C:\Users\Jack\jack.github.io:/srv/jekyll jekyll new .
~~~

#### Build and run locally
Now we have our default site, we can build and run it. 
~~~
C:\Users\Jack\jack.github.io> docker run --rm -v  C:\Users\Jack\jack.github.io:/srv/jekyll jekyll build
C:\Users\Jack\jack.github.io> docker run --rm -v  C:\Users\Jack\jack.github.io:/srv/jekyll jekyll server --watch --force_polling --drafts
~~~

If you haven't already shared your C drive, and you're  lucky, Docker will ask you if you want to share your drive, and if you're not lucky you'll get an error. Make sure you're sharing your C drive by opening docker from the system tray, going to "Settings" and then "Shared Drives" 
![alt text][ss]

`--watch` means that Jekyll will detect changes to the _config.yml file, posts and (probably) other files in the site's directory, but on windows, Jekyll recommend you will also need `--force_polling` as well, which was the case for me. 

`--drafts` means that any posts in a _drafts directory will be served as though they were in the _post

[ss]: {{site.url}}{{site.baseUrl}}/images/docker-shared-drives.PNG "Docker shared Drive"

[1]: https://jekyllrb.com/docs/quickstart/

#### Themes and plugins