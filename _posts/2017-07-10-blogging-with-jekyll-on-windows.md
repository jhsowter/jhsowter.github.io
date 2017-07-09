---
layout: post
title: Jekyll on Windows with Docker
tags:
    jekyll
    docker
---

Blogging with [Jekyll][4] on [Github pages](https://pages.github.com/) is simple and free. You can write your posts in markdown, version and deploy it with [git][3], and you can run a Jeykll server locally to test your changes before you make them live. This is great if you already have and know how to use these tools.

I have a Windows machine and don't do any development or use tools which require [Gems][2]. Jekyll requires quite a [few dependencies to be installed][1], which is a bit of an exuberance if Jekyll is the only reason you would use them. Luckily, there's ~~an app~~ a container image for that. 

Here's how to get Jekyll running in [docker][5]. 

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
C:\Users\Jack\jack.github.io> docker run --rm -v  C:\Users\Jack\jack.github.io:/srv/jekyll jekyll server
~~~
Note that you only need to `serve` since that first builds your site. 
Because these commands are so long, it's handy to put them into a batch file. Here's my convenient serve.cmd which I place in the site's root directory: 
~~~
docker run --rm -v %cd%:/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --watch --force_polling --drafts
~~~

`%cd%` outputs the current path, which in this case would be `C:\Users\Jack\jack.github.io`. 

`--watch` means that Jekyll will detect changes to the _config.yml file, posts and (probably) other files in the site's directory, but on windows, Jekyll requires `--force_polling` as well to work properly. 

`--drafts` means that any posts in a _drafts directory will be served as though they were in the _post

And that's it! If you'd like to learn more about the finer points of blogging with Jekyll, I can recommend Tony Ho's article [here][6]. 

[ss]: {{site.url}}{{site.baseUrl}}/images/docker-shared-drives.PNG "Docker shared Drive"

[1]: https://jekyllrb.com/docs/installation/#requirements
[2]: https://rubygems.org/
[3]: https://git-scm.com/
[4]: https://jekyllrb.com/
[5]: https://docs.docker.com/
[6]: https://tonyho.net/how-i-took-30-days-to-start-a-blog/