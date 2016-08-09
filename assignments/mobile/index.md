---
layout: assignment
title: Assignment 3 - Mobile Cloud Application
---

<br>

{:.table.table-bordered.table-striped.deadline-table}
|Issue date&nbsp;| Monday, 29 August 2016 |
|Final submission &nbsp;| Friday, 23 September 2016, 23:59 |

## General Overview

In the recent years, mobile cloud computing has been one of the hottest
topics regarding technological advancement. So what exactly is mobile
cloud computing and why has it gotten so much attention?

Smartphones and tablets have become ubiquitous. Owing to these
technologies, people have found new ways to spend their time more
fruitfully by trying to do more with their mobile devices. Mobile cloud
computing is a crossover between mobile web and cloud, offering greater
possibilities in terms of power and productivity.

The **mobile web** refers to browser-based web applications
for mobile devices. These applications, compared to native ones, used to
be handicapped by the lack of features such as offline storage and
support for hardware such as cameras. To address this situation, W3C has
standards that browsers can implement, giving developers a consistent
API to access features that would otherwise require writing a native
application for. The gap between mobile web and native applications is
thus narrowing.

**Cloud computing** is where data and processing power are
accessed from a pool of shared online resources known as the cloud. You
can visualise it as a super computer containing all the applications and
data belonging to their users. A user can run his applications and
process the data in the cloud using any connected device as a remote
controller.

Combining their characteristics results in mobile cloud applications
with the following strengths:

1.  **Availability**. With all data and configurations stored in the
    cloud, the user will be able to enjoy the same experience any time
    and anywhere using any mobile device.

2.  **Productivity**. What we previously could do only at home or in the
    office can now be done on the go. We are now able to read emails the
    moment it is received, edit documents or even catch up with friends
    over Facebook during a commute.

3.  **Device independent**. Want to replace your iPhone with the latest
    Android? A web application runs in any modern browser so there is no
    need to worry if your favourite application has yet to be ported to
    other platforms.

4.  **Low hardware requirements**. All heavy computation is offloaded
    from the client to the servers, reducing its role to an interface
    for sending commands to the cloud. In addition, parts of the data
    backed up in the cloud can be served on demand. The mobile device
    therefore, does not need to have large processing power and
    storage capacity.

## Grading and Admin

This assignment can be done in groups of three or four students. If you
are unable find yourself a group, you will be randomly assigned one.

This assignment is highly open-ended. We provide milestones so that we can grade
your application in a consistent way, even though everyone would be building different apps. This
assignment is also designed to introduce you to the various elements of
mobile cloud application development and the milestones are there to ensure
that you learn about the elements in a structured way. We will also provide some related tips,
references and a little bit of help to get you started.
These milestones constitute 70% of the assignment's grade.

Like the previous assignment, if you find that some of the proposed
milestones do not make sense for the application you intend to build,
you can petition to replace them with some other deliverables. You are
to explain why we should agree to your petition, and submit your
petition at least one week before the assignment is due.
**Your petition is subject to approval.**

While the milestones may be easy to meet, simply meeting them will not
give you full credit. We ask for quality submissions, not
run-of-the-mill work.

To score the coveted remaining 30%, use your creativity to develop an
application that separates yours from the rest. We will not restrict
your potential by restricting the kind of application you can build. We
expect that you (pleasantly!) surprise us with what you are capable of
doing. Do note that features must fit the aim of your application;
ideally it should be seamlessly integrated.

For example, geolocation might be the latest and coolest feature supported by most mobile
browsers but it may not contribute to the user experience in a document
editor. In fact, implementing features for the sake of doing so may work
against you by confusing the user.

Please do not hesitate to approach the friendly CS3216 staff if you need
further assistance. We can be contacted at
<cs3216-staff@googlegroups.com>.

## Objectives

In this assignment you are required to deploy a mobile cloud
application. Your goal is to demonstrate that you can design and
implement a RESTful API, as well as build a HTML5 client that consumes
your API. You can use any backend framework, but we will be providing
examples in PHP.

Remember, your goal is not to do a lot of work. Your goal is to use this
opportunity to make a difference. If you can make a difference by just
doing very little work, that is fine with us.

Before you begin, do spend some time understanding the requirements for
the assignment. The grading scheme can be found at the end of this
handout.

## Introduction

This assignment comprises 4 weeks of intensive learning that provides
you with another opportunity to express your creativity. This time, we
would be focussing on mobile cloud applications, typically with the
following components:

1.  **Clients**. Clients reside on mobile devices belonging to users, It
    could be (1) native applications, which run only on their intended
    platforms or (2) HTML5 web applications with the potential to work
    on any device with a HTML5-enabled browser. The client application
    provides the user with an interface to view and manipulate data.

2.  **Server**. The server, where intensive computation is done, waits
    for jobs from clients to come in. After processing these requests,
    the server may inform the client of its success or return relevant
    information to be shown to the user.

3.  **Database**. The database does exactly what we would expect of it
    in any other context, which is to store all of the
    application’s data.

Depending on the size of the service, differing amounts of hardware may
be deployed to keep up with the demand of its users. Obviously, large
services will require more than a single server and database. There are
many ways to configure multiple servers and databases to work together
so that the service scales. Several server instances can be run
simultaneously while using load balancers to split the work evenly among
them. Data can also be replicated over several databases and/or
distributed based on pre-defined hash functions for higher reliability
and availability. Such are issues to consider as you extend your reach
to more users but in this assignment we shall start small. In its
simplest form, a mobile cloud application can be hosted with the server
and database sharing an AWS instance.

![image](img/structure1.png)

Normally, users would download the clients from the online application
stores for their respective platforms. In our case, the workflow differs
a little from native applications. Since our client is created with
**HTML5** and supporting web technologies such as
**JavaScript** and **CSS3**, it is essentially
a normal web page with a few quirks. During the user’s first visit to
the site, we will tell the browser to quietly download and save the
program for future use. The **Application Cache** is how we
will instruct it to retain all resources required for this “web page” to
run in the absence of an internet connection. When used in conjunction
with **Web Storage**, which allows storage of data on the
local file system, your application can function like a native one.

![image](img/structure2.png)

When this happens, the client can operate with limited functionality
when it is offline and communicate with the server using
**AJAX** calls while it has internet access. Requests
typically take the form of **JSON-** or
**XML-formatted** messages and they contain details of a
job to be processed by the server, such as querying the database for
some information or to update its records. The server then replies with
a similarly formatted message response, which the client is responsible
for decoding and notifying the user of. **PHP** has
built-in functions to support database queries as well as JSON messages.

Fret not if you are not already familiar with the different technologies
indicated in **bold**. We will discuss them again in later
sections.

## Phase 1: Design

### Idea Generation

> No charge for awesomeness!
>
> – Kungfu Panda

As an aspiring entrepreneur of CS3216, you have a mind full of big ideas
eagerly waiting to see the light of day. After a long discussion with
the team about the unlimited potential of your new product, you are now
more sure than ever that this is going to be the next big thing. You
expect more users than Facebook and Twitter combined and to keep this
many people waiting any longer is simply evil.

Before you jump into developing the specifications of your application,
a very important question to ask yourself is, “Does my application solve
any problem for the users?” An application that has many superfluous
features does not make it any useful. Just because your application has
a cool concept or uses the latest technology does not guarantee that the
initial users who joined out of curiosity will stay on. On the contrary,
if a less fancy but more practical solution makes the user’s life
easier, it is more likely that the user will be retained. Solve a
problem that people care about, solve it well, and fans of your
application will naturally accumulate.

Building a killer application requires more than just technical skills.
In CS3216, we expect you to think very hard about what you’re trying to
do. You should not be building an application just because you need to
submit this assignment.

You should choose an application that fully utilises the potential of
the platform. In CS3216 (and life in general), execution matters.
Choosing the most suitable platform for your application is part of
execution. Thus, we expect you to come up with a good reason as to why
developing a mobile cloud application would best achieve your
application’s objectives.

Unlike the Facebook application you have developed in the first
assignment, your mobile cloud application does not have a ready-made
social network to leverage. It is no good to have a killer app that
nobody uses. Hence, you will need to think a little harder about how you
plan to “market” your app to potential users. You must identify your
target users, determine the relevance of your application to them
(i.e. why should they care about your application) and explain how you
plan to reach out and persuade them to use your application.

In order to promote the use of your application, good marketing
strategies are crucial in raising awareness of your application among
targeted users. After introducing potential users to your application,
how would you try to persuade them to continue using the application,
and perhaps, even share or introduce it to others? What value do the
users derive from using your application?

Ideally, you should also think of ways to provide motivation for users
to share your application with their friends. The application should be
designed such that while individual users may derive some value using
your application, it is in their interest to promote your application
(e.g. A reward scheme can be set up to give out benefits for referrals.)

The number of users with mobile devices have grown rapidly in recent
years. Given this trend, how would you take advantage of this growth to
increase the number of people using your application?

Now that you have a solid idea of what you want to build, it is a good
time to pick a suitable name for your mobile cloud application if you
haven’t already done so.

Database Planning
-----------------

Make sure you take some time to plan a good schema design. Having to
change the schema and code later can be a painful process, more so if
you already have a considerably large user base. Refer to the first
assignment if you need a quick recap on relational databases. Remember
the principle of <span>**design once use forever**</span>.

RESTful API
-----------

Much as we would love to immediately begin building the application,
there is still one final thing we need to draw up plans for, the RESTful
API itself. Being the bridge between the client and server, both sides
should be very clear of the specifications to avoid unnecessary
confusion during development. If you only decide on parts of the
interface while you program the application, you risk having an
inconsistent API. It pays off to plan this well; who knows, your
application may become so prominent that you might want to open the API
to third-party developers.

<span>**Representational State Transfer**</span>, REST in short, is an
architecture for networked applications. Being one of the simplest
architectures to deploy, it is a popular choice for many web services.
REST is a client-server architecture where a client initiates a request
to the server to be processed, and receives a response with updated
data. It is stateless, meaning that the server does not maintain the
state of the client and every message to the server must contain all
necessary information to process the request. Not having persistent
connections or complex states means that the service can be set up using
simple web servers, and requests can be distributed across multiple
servers for greater scalability. You may have noticed that the Facebook
Graph API falls under this category.

Requests and responses can take many forms: <span>**XML**</span> and
<span>**JSON**</span> are just two of the most common formats. Note that
the request and response may not necessarily be in the same format. For
example, when uploading a photo using the Facebook Graph API,
<span>multipart/form-data</span> is sent while the reply containing the
photo ID is in JSON. We now take a quick detour to explore the JSON
format since it is one of the easier ones to handle.

<span>**JavaScript Object Notation**</span> or JSON is text-based
data-interchange format. Consider your current scenario where you are
working with an object in your client using JavaScript and you need to
send it over the network to be processed by the server. JSON is a set of
rules to encode and decode data to and from a universally recognized
string format so it can be used with any programming language which
implements these rules. JSON works on any object made up of key/value
pairs and/or ordered lists of values. The resultant string is also
human-readable unless encoded binary files are involved. The following
JSON string could be a response from a social network’s REST API to a
request for information on the user with id = 0, where `{ }` represents
a dictionary and `[ ]` an array.

    {
      "id": "0",
      "name": "James",
      "tel": "61234567",
      "mobile": "87654321",
      "friends": [{
        "id": "1",
        "name": "Andy"
      }, {
        "id": "2",
        "name": "John"
      }]
    }

JSON is already supported by all modern browsers and server-side
scripting languages so you do not need to implement it yourself, but if
you want to know more details, visit <http://www.json.org/>.

Going back to the API: one way to start planning it is to write down a
list of functionality (which require server interaction) that you would
like the client to have (e.g send a private message, buy a product,
leave a comment). Try to group related ones together (e.g add / remove a
friend).

Next, for every operation, you establish a triplet which describes it:

1.  **Request method + relative URL**

    When an address is entered into the navigation bar, the browser
    performs a GET request to retrieve the page located at the URL.
    However, a POST request is made instead when we submit a
    registration form on the same page. If you haven’t realised, the
    HTTP request method describes the action we want to perform and the
    URL refers to the resource to act on. Just by looking at this
    combination, we should already fully understand the intention of
    the request.

    By convention, REST uses four request methods for the following
    purposes:

    -   POST /products - create new resource.

    -   GET /products/12345 - get existing resource.

    -   PUT /products/12345 - replace existing resource.

    -   PATCH /products/12345 - modify existing resource.

    -   DELETE /products/12345 - remove existing resource.

    Notice how ‘clean’ URLs are used instead of the usual PHP query
    string? Comparing `/products.php?id=12345` to its clean form
    `/products/12345`, the latter is more readable and has greater
    semantic meaning. It also conceals implementation details of the
    server which is irrelevant to the client, such as the file extension
    of the server-side script.

    As limited as these request methods may seem, they are actually
    sufficient to describe any operation. Consider a request to make
    a purchase. Though there is no BUY method, we do not append an
    action to the URL (POST <span>/products/buy</span>). Why make things
    more complicated when we already have a clean and built-in way of
    representing the operation? Instead, buying a product can be thought
    of as creating a ‘transaction’ (POST <span>/transactions</span>).
    The trick is to derive a noun from the action.

2.  **Parameters**

    This is the data required to compute results. Typically, you only
    need this for PUT and POST methods. Any message format may be
    used here. You can consider using JSON for simpler requests and
    <span>multipart/form-data</span> for larger ones, like photos.

3.  **Return value(s)**

    This is the information to return to the client after processing the
    request. Like the parameters, you can choose to use any message
    format here. Make sure that you also plan for error responses, using
    the semantically correct HTTP response code.

    If your request can potentially return large amounts of data,
    consider using a paging mechanism. Imagine your Facebook news feed
    returning all entries since the day you joined the social network!

You may have the freedom of planning this however you like, but always
try to keep your API consistent. It would also be pretty confusing if
every API function uses different message formats.

There are too many REST practices to be discussed in detail here; make
sure you do some research before you continue. You can find many
articles and discussions online regarding RESTful API design. Note that
this topic is highly opinionated, with many differing opinions on what
constitutes REST. It is not necessary to go to great lengths to follow
every single rule, but you must be able to justify your decisions with
regards to your application’s needs. It is also recommended that you
take a look at Facebook’s Graph API[^1], which conforms rather well to
REST principles. In particular, observe their choice of HTTP request
methods, how their relative URLs are structured as well as parameters
passed.

## Phase 2: REST Server

Now that you are done with the planning, it is time to turn your design
into a usable product. In this section, mini tutorials will be provided
to get you started on implementing your REST server in PHP. Since the
client is probably required to test much of the server’s functionality,
you are advised to split the work well among your team-mates to develop
the server and the client communication components concurrently.

Getting Started
---------------

The following is a simple “Hello World” REST service provider for a very
minimal social networking site. This should take you less than 5 minutes
to complete.

Upload the newly-created file to your AWS instance and navigate to the
URL in your browser. You should see the following text:

    {
      "id": "0",
      "name": "Bob",
      "friends": [{
        "id": "1",
        "name": "Andy"
      }, {
        "id": "2",
        "name": "John"
      }]
    }

Congratulations, you have just built your first REST service provider.

The JSON extension, which ships with PHP 5.2.0 or later, provides us
with functions that convert data between a PHP array and a JSON string.
In the above example, we see that `json_encode` converted our array with
Bob’s data into a JSON string. It works on both indexed or associative
arrays, and even objects as well. More information and examples at:
<http://sg.php.net/manual/en/book.json.php>

Database Queries
----------------

We have seen that dealing with JSON in PHP is trivial using only
built-in functions. However, any decent web application should do more
than returning a hard-coded array. As the built-in functions do not
support the query resource directly, the rows have to be fetched
individually and added to an array.

HTTP Request Methods
--------------------

Now that we can use the results from queries, we can move on to
providing the actual API for the client to use. We can do so by handling
the four HTTP request methods used in REST services: GET, PATCH, PUT,
POST and DELETE. As mentioned earlier, GET retrieves a resource, PATCH
modifies it, PUT replaces it, POST creates a new resource, and DELETE
removes the resource. If it is intended that users are not allowed a
particular action, then you can ignore the corresponding request method.

In the next example, consider an online store portal used by individuals
who want a quick and painless way to set up a blogshop. The portal also
has an application to help store owners manage their blogshop on the
move. Through the use of a REST API, the application allows the
shopkeeper to retrieve, create, edit and remove items from the store.
The skeleton of a PHP script to handle one the products stocked by the
shop is provided below, with likely database queries and API responses
suggested in the comments.

TODO: Add in missing example code.

If there is anything in the snippet that is new to you, it is probably
the extra line in the PUT and DELETE cases.
<span>file\_get\_contents</span> is used to retrieve the HTTP request
body and <span>parse\_str</span> tokenizes the data and inserts the
key-value pairs into an associative array. This achieves an effect
similar to the built-in <span>\$\_GET</span> and <span>\$\_POST</span>
arrays. However, <span>parse\_str</span> only works for url-encoded form
data. When expecting other data types, they must be parsed with their
respective functions (e.g. <span>json\_decode</span> for JSON).

Code has been omitted for brevity; however, do remember to program
defensively e.g. sanitise all input. Also, as different operations may
be expecting differing types of data, you should always specify the
content-type of the message so the receiving end knows how to handle it.
You can check the content-type of the request using
<span>\$\_SERVER<span>\[</span>’CONTENT\_TYPE’<span>\]</span></span>.

If you face problems trying to get PATCH, PUT and DELETE to work,
chances are, they have not been enabled. Look into Apache’s
<span>**httpd.conf**</span> for the <span>Limit</span> and
<span>LimitExcept</span> directives corresponding to your virtual host
and include the missing methods. In case you are wondering, Apache is a
generic webserver which can be used for many purposes and this file is a
configuration file used to customize the server for your specific needs.
The location of this file may differ for the various Linux distros, but
you can always consult Google.

    <Directory "/var/www">
      AllowOverride FileInfo AuthConfig Limit Indexes
      <Limit GET POST PATCH PUT DELETE>
        Require all granted
      </Limit>
      <LimitExcept GET POST PATCH PUT DELETE>
        Require all denied
      </LimitExcept>
    </Directory>

In the above example, Limit (<span>Require all granted</span>) allows
the four methods to be accessed by any users and LimitExcept (<span>Deny
from all</span>) denies all instructions except these four from
everyone. This means that only GET, POST, PATCH, PUT and DELETE are
allowed on the server. Even if you did not have to manually enable
PATCH, PUT or DELETE, you might want to consider blocking unused methods
just in case. Restart Apache after you have made the changes.

URL Rewrite
-----------

When we planned the REST API earlier, ‘clean’ URLs were used. However,
this is not possible without some additional work as we know that PHP’s
parameters look like <span>?var1=val1&var2=val2</span>. What we need is
the rewrite module (mod\_rewrite), which lets us modify the URL before
Apache tries to execute the referenced script. To enable it, look into
httpd.conf and make sure the following lines exist and are uncommented:

    LoadModule rewrite_module modules/mod_rewrite.so

Alternatively, run

    sudo a2enmod rewrite

Find the Directory directive corresponding to your web folder and set
AllowOverride All. Also make sure to remove MultiViews from Options as
it interferes with rewrite. After you’re done, restart Apache.

Create a file called .htaccess in your root directory with the following
lines:

    RewriteEngine on
    RewriteRule ^products(?:/([^/]+))?/?$ products.php?id=$1 [QSA,L]

The RewriteRule matches any relative URL with the form
<span>products/\[product-id\]</span> and rewrites it to point to the
real file products.php, passing the product-id as one of the URL
variables. To learn more about <span>mod\_rewrite</span>, refer to the
official guide at
<http://httpd.apache.org/docs/current/rewrite/intro.html>. Note that
your Apache version may differ.

## Phase 3: Mobile Client

With a HTML5 application, native functionality and libraries on the
device cannot be directly accessed. However, this does allow your
application to be used by any device with a modern web browser. In this
section, you will learn how to create a simple HTML5 client that is able
to work even while the device does not have an internet connection.

### Getting Started

As you would have already learnt about HTML5 from your first assignment, only new
ideas which apply to mobile devices will be discussed here. Apart from
your usual HTML5 features, most mobile devices allow users to add a
shortcut of a web page to their home screen.

![image](img/homescreen-ios7.png){height="200pt"}

Add to Home on iOS 7

![image](img/homescreen-android-lollipop.png){height="200pt"}

Add to Home screen on Android Lollipop

In iOS and Android devices, it is possible to run these shortcuts in a
standalone browser window without the browser’s UI controls. This allows
web applications added to home screen to more space to work with and
look as if they were native applications. Special metadata tags have
been developed to allow developers to set icons, splash screens and even
the colour of the device’s status bar. As much as users may like your
application, adding a blank icon does not help users identify your
application among the others they have installed. If users are willing
to shortcut your application, capitalise on their goodwill by making it
easy for them to return to your application.

You can find the documentation for
[iOS](http://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/ConfiguringWebApplications/ConfiguringWebApplications.html)
and
[Android](https://developer.chrome.com/multidevice/android/installtohomescreen)
at their respective developer centres. If you plan to release your
application, it is a good idea to do the same for other platforms that
we may not have covered here.

### Presentation

Your team (or maybe just your user interface designer) should spend some
time designing a good UI: a good UI helps keep users. Although the
functionality of your application is important, the way that it provides
the functionality is just as important. Users will not continue using an
application that is difficult to use, regardless how technically
superior your application is or what functionality it provides. If your
users do not like it, they simply won’t use it.

All you have to do is spend some time testing your application. In most
cases, you will quickly know if your UI makes or breaks it. It’s common
sense (!)

After the UI has been designed, the UI needs to be implemented.
Cascading Style Sheets (CSS) would be used, since the application is in
actuality a fancy web page. All styles should be contained within CSS
files, linked to the main page using <span>link</span> tags. It is bad
practice to mix CSS with HTML.

### Offline operability and data persistence

Very often, it is a good idea to provide the user with some level of
offline operability. Even without an internet connection, your
application should not be totally useless. If there is something that
can obviously be done offline, users will expect to be able to do so.

For example, photo sharing applications should allow users to organise
and edit photos any time. These jobs can be saved in a queue if the
application is not connected and these operations can be played back on
the server when the application goes back online.

Another example is the Dropbox iOS application. An internet connection
is required to retrieve files that the user has stored in the online
folder. However, it also allows users to flag selected files for the
application to cache locally in the phone’s internal memory, making them
available at all times.

We shall now look at the additions to HTML5 that will enable you to
realise this for your application.

#### 1. Application Cache

For your application to work offline, the browser will need to have all
files related to your application. When the browser first loads the page
of your client, it will refer to a file called the cache manifest. The
cache manifest contains a list of resources that the browser will retain
for offline usage.

To get started, we first need to tell Apache about our cache manifest.
Create a file named .htaccess in the root of your web directory and add
the following line.

    AddType text/cache-manifest .manifest

This makes sure that files with the extension .manifest are served with
the Content-Type of <span>text/cache-manifest</span>. This is necessary
as it hints to the browser the format of the file and how it should be
dealt with.

Next, we need to add the manifest attribute to the html tags in all html
pages belonging to the client:

``` {.html language="HTML"}
<!DOCTYPE html>
<html manifest="cache.manifest">
    ...
</html>
```

This will point the browser to the cache manifest we are about to
create. It will contain a list of resources required for your
application to work offline. Resources include HTML pages, images,
stylesheets as well as JavaScript files. Finally we proceed to create
the following file:

cache.manifest:

```
CACHE MANIFEST
# version 1.0

index.html
img/icon.png
css/default.css
js/jquery-1.6.1.min.js

NETWORK: *
```

Some points to note about the cache manifest:

-   <span>\#</span> denotes a single-line comment.

-   The NETWORK section is a list of white-listed pages. If your
    application will request files from other domains besides your own,
    they need to be listed under this section or the requests will fail.
    means that any domains can be accessed from your application.

-   The browser will only update its local copy of the application if a
    change is detected in the cache manifest. Therefore, it is common
    practice to add a comment containing a version or revision number to
    be incremented whenever changes to the application are made, forcing
    the browser to retrieve fresh copies of all resources.

-   When the cache manifest is updated, new copies of resources are not
    served to the browser. This means that the user will still see the
    cached copy of the page. Therefore, the page content has to be
    refreshed programmatically. Read “Updating the cache” section to
    find out more:
    <http://www.html5rocks.com/en/tutorials/appcache/beginner/>.

Note that the cache manifest does not strictly need to be named as such.
Make the necessary changes to the AddType directive and manifest
attribute should you wish to use a different name and file extension.

Read about more features of the Application Cache at:
<http://www.w3.org/TR/html5/offline.html>

#### 2. Web Storage

The Application Cache allows resources to be retained locally, but
JavaScript variables do not survive past the lifetime of the
application. When the application is restarted, it is reset to a clean
state. Prior to HTML5, cookies have been used to retain client state;
however, this method creates burden on the network as all cookies
associated with a domain are sent with every request. Web Storage is a
storage API which allows storing data associated with a site which
persists across sessions, without the drawbacks of using cookies.

<span>**Web Storage**</span> is a key/value store and can be accessed
through the `localStorage` object.

TODO: Add in missing code

In the example above, nothing is observed when the user first loads the
page. However, we define a new state containing the user’s ID as well as
his name into the key/value store. When the page loads in future, we
will see that the state has already been set and will show up in the
console. We can also clear the `localStorage` object or remove a
specific key/value pair. As Web Storage does not support storing
objects, one workaround is to store the object in JSON format.

For a complete list of Web Storage’s capability, visit
<http://dev.w3.org/html5/webstorage/>.

#### 3. Online/Offline Events

Storing data is easy, the tricky part comes when having to deal with
synchonisation of states between the client and server.

How does the server update a client when it connects with outdated data?
How will a client post outstanding jobs when it goes online? What
happens if both cases occur at the same time with conflicting
instructions (e.g. client tries to comment on a thread that has already
been deleted from the server)? These are but a few out of many
possibilities that have to be considered.

How you handle the problem depends on your application; prior to that,
your application would actually need a means to <span>*determine*</span>
if there is an internet connection:

TODO: Add in missing code

`navigator.onLine` is a boolean value containing the device’s current
internet connection state. You can also register callbacks for the
`online` and `offline` events. Try visiting the page on your mobile
device and watch the events fire as you toggle your Wi-Fi on and off.

### Communicating with the Server

Your application needs to be able to communicate the user’s actions to
the server. Since our application runs in the browser, we can use an
AJAX call to do so. AJAX allows you to make HTTP requests using
JavaScript a page reload. The following example uses jQuery to make a
request to the REST server we have created earlier:

TODO: Add in missing code

Within the AJAX call, the `type` refers to the HTTP request method. Just
by looking at the parameters, we should already know that
`PUT /products/12345` is a request to modify the information of the
product with `id` = 12345. Therefore, it makes sense to send the new
information to the server through the data parameter. Following
Facebook’s convention, a `true` or `false` response is returned for
requests that do not require data. If you are expecting JSON to be
returned, set the `dataType` to <span>json</span> and jQuery will decode
it for you. Also, the `contentType` defaults to `urlencoded` – remember
to specify this parameter if the server expects the data to be in some
other encoding.

Finally, callbacks can be used to perform actions when the AJAX call
succeeds or fails. Make sure that users are notified of a failure
instead of being kept in suspense. Visit
<http://api.jquery.com/jQuery.ajax/> for a full list of options that
\$.ajax() has to offer.

### Authentication

Being able to talk to a server is not enough. As anyone can form and
send a request to the server, you need to protect important API calls so
that only known users can use them (e.g. only the blog owner should be
able to delete his own articles). To do so, we need some method to
determine the identity of the person making the request.

The simplest approach taken by many services is to use the HTTP basic
access authentication.

TODO: Add in missing code

The `headers` key tells jQuery to append the specified headers while
making the HTTP request. `window.btoa` performs a base64 encode of a
string, which is defined as the concatenation of the username, a colon,
and the password . This results in the following header being sent with
the request in this case.

    Authorization: Basic VXNlcm5hbWU6UGFzc3dvcmQ=

The `Authorization` header is automatically decoded and passed to the
PHP variables and , which you can then authenticate against.

TODO: Add in missing code

The base64-encoded string may look cryptic but it is in fact reversible;
this means that we are transmitting the password in clear. You should
use SSL when using such a scheme. Once again, the choice of
authentication protocol for RESTful APIs is subject to much debate with
no hard-and-fast rules. It is your job to identify the most practical
choice for the requirements of your application. Basic access
authentication should be sufficient in most cases, but feel free to use
any methods you deem fit.

### User Experience

Another important part of your application is user experience. Please
note that user experience (usually addressed as UX) is different from
the user interface (UI). A good UI does not guarantee a good UX at all.
Sometimes, a cool-looking UI can be a disaster because of poor UX.

The user experience encompasses all aspects of the end-user’s
interaction with the application. There are many components which
comprise a good user experience, but minimally the application should
allow the users to do what he wants with minimal fuss. User experience
goes far beyond giving users what they say they want, or providing a
checklist of features. In order to achieve a high-quality user
experience in your application, careful thought must be put into its
functionality, interaction design and interface design.

User experience is not just the job of the UI designer. Just like a good
UI, you will know if an application’s UX is good or bad. Any team member
can contribute to your UX design by using it and providing feedback and
suggestions. Ask your friends to use it as well to gather more feedback
and ideas.

### Google Analytics

Just like the Facebook application, you might be interested in the usage
statistics of your application. Where Facebook applications have access
to Facebook Insight, which provides a lot more information about your
application, there is no standard approach to performing analytics on a
HTML5 site.

Google Analytics is one popular platform. It can be set up easily, as
you have already done in Assignment 1. The following examples are using
the new <span>analytics.js</span> snippet, part of Universal Analytics.

You can save this code snippet separately and include it in your view
templates. For example, create a PHP file named
<span>analytics.php</span> with the code above and include it on each
PHP template page. Then, add the following line to each template page
immediately after the opening `<body>` tag:

``` {.php language="PHP"}
<?php include_once('analytics.php') ?>
```

If your application’s interface is predominantly built with a JavaScript
framework, it is possible that you only have one html page with all
transitions handled by JavaScript code. Pages can still be tracked using
Virtual Pageviews by executing the following code instead. Refer to
<https://developers.google.com/analytics/devguides/collection/analyticsjs/pages#overriding>
for more information.

    ga('send', 'pageview', '/your_virtual_page_path');

<span>**Event Tracking**</span> can provide more fine-grained control
over user actions. They can be used to track more events such as
successful AJAX calls, buttons pressed, or even videos downloaded. The
following code can be embedded in the click callback of a button which
publishes a new blog post:

    ga('send', 'event', 'button', 'click', 'publish');

In particular, <span>**Social Interaction Analytics**</span> can be used
to track clicks on social buttons on your application, such as Like, +1
or Tweet buttons. To learn how to track social network activity, check
out
<https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions>.

Finally, since we have added an additional resource to our page, we need
to update our application manifest. If the `NETWORK` section is not set
to allow all domains (`*`), we will need to manually include the two
resources that Google Analytics requires.

    NETWORK:
    //www.google-analytics.com/analytics.js
    //www.google-analytics.com/collect

Files under the `NETWORK` section are whitelisted and not cached, which
is appropriate for data collection endpoints. `analytics.js` contains
code which reports the statistics of the application. Google Analytics
works by making a GET request to a 1 \* 1 pixel image
(http://www.google-analytics.com/collect) when something needs to be
tracked. Therefore, it needs to be whitelisted so the request hits the
network every single time, since fetching from the local cache will not
update Google’s servers with the tracking data.

Google Analytics only updates the reports once a day, do not expect to
see immediate results. There are however, signs to check that your
application is being tracked:

1.  Check the Network tab in the developer tools provided by your
    browser. Every time a tracked page or event occurs, a new GET
    request to /collect should appear.

2.  Use “Real-Time” mode in the Analytics dashboard, which allows you to
    view activities on your application in near-real time.

More information and examples at
<https://developers.google.com/analytics/devguides/collection/analyticsjs/>.

## Phase 4: Coolness Factor

**This section is purely optional. Completing milestone(s) described in
this section may contribute to the 30% coolness factor.**

Several suggestions have been provided. We emphasize that these are
merely suggestions, which means that if you find them unsuitable for
your application, you may still score full points in coolness by coming
up with ideas of your own. On the other hand, blindly using these
suggested technologies to create redundant features will not get you any
credit. It is about using them in creative ways to make your application
more desirable to use.

### Social Integration

According to statistics, more than 1.49 billion users actively visit
Facebook every month, 1.31 billion of whom are on mobile devices.
Twitter has 316 million monthly active users, with 252 million on
mobile. Where else can you find the potential to reach so many people
without a single cent spent on advertising?

Integrating Facebook Login can help potential users overcome the inertia
of a tedious sign-up process can potentially make them more inclined to
try your application.

Facebook Social Plugins or Twitter for Websites creates a wall post or
tweet with a single click of the mouse, extending your reach to friends
and followers of your current users. Having just one friend per user
(out of hundreds) sign up would easily double your user base.

Best of all, most of these features can be included by copying and
pasting provided code snippets or calling a few functions in the
JavaScript SDK. This is so simple that it is a waste not to do so.
Without much additional effort, you can get your application seen and
possibly used by many more people. Of course, your application must be
good or no one would share it.

### Geolocation

Geolocation services are becoming increasingly popular with people. Many
services have made their applications location-aware to provide users
with more relevant results.

Fortunately, Geolocation is specified in HTML5 so non-native
applications can also make use of this powerful feature. The Geolocation
API consists of three simple functions you can use to make your
application location-aware. When calling these functions, callbacks are
passed to handle success and failure cases.

1.  `getCurrentPosition`: Invokes callback with user’s current position
    passed as the first parameter.

2.  `watchPosition`: Does the same as `getCurrentPosition`. In addition,
    it starts monitoring the user’s position and invokes the provided
    callback whenever it changes. The new position is passed to the
    callback as the first parameter.

3.  `clearWatch`: Stop monitoring user’s position.

This code will continue to output the user’s position as he walks about
with his mobile device:

TODO: Add in missing code

Showing the user his coordinates may hardly be of any use to him at all.
You could take it up one level by plotting it on a map. The next example
does the same thing but plots the position using Google Maps:

TODO: Add in missing code

For complete documentation of Geolocation API and Google Maps, visit
<http://dev.w3.org/geo/api/spec-source.html> and
<https://developers.google.com/maps/documentation/javascript/reference>
respectively.

### Native Look and Feel

Although your application may not be native, it may be a good idea to
style it to look and feel like one. Owners of mobile devices have
probably become accustomed to the user interface provided by the
operating system, so they instinctively know how to use a native
application when faced with one. When there seems to be more
information, they try to scroll down. When they perform a swipe, they
expect to see the next page. Likewise, to navigate through the
application, looking for tabs at the bottom of the screen is the first
thing that comes to mind. By making your application native-like, its
learning curve becomes less steep. In addition, a lot of research has
been done by the mobile device creators to arrive at the current
interface, we are less likely to make design mistakes by replicating it.

How can we emulate a native application? As part of the goal to improve
the mobile web, HTML5 and CSS3 have been loaded with many new features.
These features include animations, 3D transformations, visual effects
and events which can reproduce the native look and feel when used in
parallel. To do so however, is time-consuming and a sizeable project on
its own. Fortunately, others have done the dirty work and open-sourced
frameworks and libraries you can use to easily recreate the native
experience. The following are some examples you can consider:

-   jQuery Mobile - <http://jquerymobile.com/>

-   Framework7 - <http://www.idangero.us/framework7/>

-   jQTouch - <http://jqtouch.com/>

You probably know this by now, but using others’ code does not come
without any cost. Some have very steep learning curves, others may
require you to adopt a totally different style of programming and
certain ones may be hardly or badly documented. Worst of all, the code
may be littered with bugs and you certainly do not have the time to be
fixing someone else’s problems. Be sure to do a thorough evaluation
before making a decision. Also be warned that the teaching staff may be
unfamiliar and thus unable to assist with problems encountered with
external frameworks/libraries.

### Other Emerging Features

There are a lot more cool and useful web APIs than what has been
described in this document. For example, [notification
APIs](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
let you send out notifications at the system level; device APIs allow
you to interact with users’ hardware directly, including [detect changes
in ambient
light](https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent/Using_light_events),
[check battery
status](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
or [trigger
vibration](https://developer.mozilla.org/en-US/docs/Web/Guide/API/Vibration)
- imagine playing a web based game, and when you set off some
explosives, your phone vibrates a bit!

Here are some useful links:

-   <https://developer.mozilla.org/en-US/docs/Web/Reference/API>

-   <https://developer.chrome.com/extensions/api_other>

-   <http://caniuse.com>

## Grading Scheme

The grading of the assignment is divided into two components: satisfying
the compulsory milestones (70%) and coolness factor (30%). There are 15
compulsory milestones. Excluding Milestone 3 which is not graded; the
remaining 14 are worth 5% each for a total of 70%.

### Final Submission (due Friday, 23 September 2016, 23:59):

-   Completion of all compulsory milestones. Submit your answers in a
    write-up and categorise your answers by the milestones they
    belong to.

-   Another separate write-up pitching your application to the teaching
    staff, i.e. convince us that your application is so good that it
    deserves all 30% of the coolness points. **Restrictions:** no longer
    than 2 A4 sides.

## Mode of Submission

**For the final submission**, please make sure your Git repository
contains the following:

1.  Place the `README.md` file in the root directory. Bitbucket
    will automatically render it on your repository’s front page. You
    may wish to style it using any of the supported markup languages.
    The file should contain the list of group members, including
    matriculation numbers, name and a description of the contributions
    of each member to the assignment. Include the URL to your
    application, i.e. your application must be accessible
    online somewhere. Make sure that your application name is clearly
    written in the `README` file.

2.  A write-up, `group-<number>-milestones.pdf` containing
    your answers to all compulsory milestones that require
    written answers.

3.  A one/two-page pitch of your application,
    `group-<number>-pitch.pdf` to convince each teaching staff
    that your application is so good that it deserves full marks
    for coolness.

4.  Proof of working application: either publish your application
    publicly and provide a link to the main page of your application in
    your `README.md` file, or add all the teaching team members
    as co-developers of your application.

Clarifications and questions related to this assignment may be directed
to the IVLE Forum under the header "Assignment 3: Mobile Cloud Application".

Good luck and have fun!

---
<br>

[^1]: <https://developers.facebook.com/docs/graph-api>
