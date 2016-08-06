---
layout: assignment
title: Assignment 1 - Life of a Facebook Application
---

|Issue date &nbsp;| *Monday, 8 August 2016* |
|Mid-assignment submission &nbsp;| *Friday, 19 August 2016, 23:59* |
|Final submission &nbsp;| *Friday, 2 September 2016, 23:59* |

<br>

## General Overview

In this assignment, you will learn about the development life cycle of a
Facebook Application. You will be guided[^1] to write your (probably
first) Facebook application. Before we begin, you might want to decide
which programming language to use. If you have not done so, you are
encouraged to login into and explore your AWS account. You should have
set up PHP (or the programming language of your choice) and MySQL and be
able to access your content online. Remember, these may take a day or
two to get right. You do not want to leave it to the last week.

This assignment is highly open-ended. We provide milestones so that we can grade
your application in a consistent way, even though everyone would be building different apps. This
assignment is also designed to introduce you to the various elements of
Facebook application development and the milestones are there to ensure
that you learn about the elements in a structured way.

However, you have a lot of freedom to express your creativity. You are
free to develop any application you choose. However, if some of the
proposed milestones do not make sense for the application you intend to
build, please submit a petition at least one week before the assignment
is due. **Your petition may or may not be approved**. Furthermore, while
the milestones may be easy to meet, simply meeting them will not gain
you maximum credit. We expect quality submissions, not run-of-the-mill
work.

The high-level goal of this assignment is simple: a working Facebook
application that is able to persist the users' state and allows users to
interact with each other. Please read through the whole assignment once
to get a sense of what is required before starting work on it. A
detailed grading scheme is attached at the very end.

## A Word of Caution

Before we begin, there's something you should know. Facebook is a very
dynamic platform and things are liable to change at any time. As you
read this, Facebook's engineers continue to change the way their SDKs
(Software Development Kits) work. The current version of their SDK is
[v2.7](https://developers.facebook.com/blog/post/2015/07/08/graph-api-v2.7/),
released on 8 July 2015. If you had experience with Facebook SDKs
before, you will have to update yourself with these [new
changes](https://developers.facebook.com/docs/apps/changelog).

This is an excellent opportunity to work with an actively changing
platform; there are valuable lessons to be learnt on project and risk
management, which are highly applicable to projects outside school!

With that out of the way, let's begin...

<div class="box">
  <strong>Reminder</strong>: Please read the entire assignment before starting.
</div>

## Phase 0

> *"If you wait to do everything until you're sure it's right, you'll
> probably never do much of anything."*
>
> — Win Borden

After meeting with your wonderful fellow CS3216 students, you finally
decided that it is time to do something. You have decided to make your
inspiration a reality! While you are at it, we are here to guide you.

To embark on this journey, you have to first install the Facebook
Developer application.

<div class="box">
  <strong class="milestone-counter"></strong> Install the Facebook Developer application
  from <a href="http://developers.facebook.com/apps">http://developers.facebook.com/apps</a>.
  (Not graded)
</div>

**Note**: During this process, Facebook may require you to
verify your identity and confirm that you are not a spammer. You can
choose to do so by either entering a one-time code, which they will send
you via SMS, or by entering your credit card number.

Next, you have to decide what kind of application you want to create.
You can choose to create: (i) a Facebook Canvas application, (ii) a
standalone Web Application that connects with Facebook, or (iii) both! A
Facebook Canvas application is one that loads within the main Facebook
website while a standalone application is a separate website that
connects to Facebook to retrieve information about users and post on
their walls. An example of (i) is [*Candy Crush
Saga*](https://apps.facebook.com/candycrush/) and an example of (ii) is
[*Coursemology*](http://coursemology.org/), a gamified learning platform
used by students in CS1010S and CS2020.

If you have a good reason to, you could even develop both types of
applications for your project. However, do note that execution matters:
you do not automatically get extra points for choosing to do both. If
you choose to develop both a Facebook Canvas and a standalone
application, and if your execution is poor, you will get lower grades
compared to a team that only developed one type of application and did
it well. Consider yourself warned. But of course, if you decide to do both and your
execution is fantastic, you can expect a better grade.

<div class="box">
  <strong class="milestone-counter"></strong> Choose to do a Facebook Canvas application,
  a standalone application, or both. Choose wisely and justify your choice with a short write-up.
</div>

To begin your journey with your Facebook Application, go to the [Facebook
Developer page](https://developers.facebook.com/), click on the **My Apps** drop-down
on the top navigation bar, and then the link that says **Add a New App**.

Before you do anything else, click on the link that says [**Facebook
Platform Policies**](https://developers.facebook.com/policy) and read
it. You should also check out Facebook's [Terms of
Service](https://www.facebook.com/terms): you *are* going to write an
application for Facebook, with some of you deciding to monetize your
Facebook applications in the future. It is *probably* a good idea to
read and understand the terms and policies so that you do not develop
something that is inappropriate. Remember, if you violate any of the
policies or terms, you risk having your application deleted.

(Scenario: imagine you have just finished your final project, you have
even reached that coveted 1 million eyeballs that would have given you
an easy A+, yet, on the day before project submission, you received an
e-mail from Facebook telling you that your application breached its
policies and had to be deleted... we do not need to tell you the rest of
this story, do we?)

## Phase 1: Baby

> *"Babies are always more trouble than you thought – and more
> wonderful."*
>
> — Charles Osgood

After you have read Facebook's policies, it is time to name your
Facebook application. By now, you should already have an idea of what
your application will do, so pick a reasonable name. Out of ideas? Check out
[http://www.whatalovelyname.com](http://www.whatalovelyname.com). :P

<div class="box">
  <strong class="milestone-counter"></strong> Your new baby needs a name! Give it one! (Not graded)
</div>

Once you have filled in a display name for your Facebook App, enter a
contact email address and select a category for your new application. After
reading the Facebook Policies (you have read it, haven't you?), click on
"Create App ID".

Once your Facebook application has been created, Facebook will show you a list
of Facebook products you can activate for your Facebook application. Clicking the
"Get Started" buttons will prompt Facebook to guide you through the setup of the
product.

To configure your Facebook application, the settings can be found through a link
on the left side bar. Facebook has a [step by step guide](https://developers.facebook.com/docs/apps/register) that will guide you in
configuring your Facebook application. The following is a list of common settings
you will find in a Facebook application.

**Settings - Basic**

**App ID:** This uniquely identifies your application on Facebook. No
two App IDs are the same.

**App Secret:** This is the key with which you would access the Facebook
APIs within your application. Do NOT share this with anyone. If you do,
they can use it together with your App ID and make API requests without
you knowing. Reset your App Secret key immediately once you have reason
to believe that it has been compromised.

**Display Name:** The name of your application, which does not have to
be unique among existing Facebook apps. This can be changed later on.

**Namespace:** This field is used for the URL for Apps on Facebook or to
define customized Open Graph Objects and Actions. Do not worry if you
find yourself a bit lost at this point; we will discuss Open Graph in
greater depth later).

**App Domains:** This specifies the domain your application lives in.
Facebook uses this a security feature to make sure the user is
authenticated correctly and is directed to the right application. If
your Site URL is
<http://ec2-174-129-70-144.compute-1.amazonaws.com/some-dir/>, then your
App Domain would be
[ec2-174-129-70-144.compute-1.amazonaws.com](ec2-174-129-70-144.compute-1.amazonaws.com).

**Contact Email:** Pray that you don't receive any emails from Facebook
while building your application.\
Next, click on the huge **Add a Platform** button. Standalone
applications should pick **Website** on this dialog.\
<span>*For Facebook Canvas applications:*</span>

**Canvas Page:** This is your application page (those
<http://apps.facebook.com/some-app>). Use something that is both related
to your app and easy to remember.

**Secure Canvas URL:** The URL that will be accessed by Facebook and
shown to users when they go to the canvas page. If you are using AWS,
this URL should look something like
<https://ec2-174-129-70-144.compute-1.amazonaws.com/some-dir/>. You
should not refer to a page directly (e.g.
[http://\[your\_host\]/some-dir/index.php](http://[your_host]/some-dir/index.php))
because if the user attempts to access the page
<http://apps.facebook.com/some-directory/sayhello.php>, Facebook will
attempt to access
[http://\[your\_host\]/some-dir/index.phpsayhello.php](http://[your_host]/some-dir/index.phpsayhello.php),
which is not what you would usually want. For security purposes,
Facebook requires you to provide a link to direct users when they visit
your Facebook Canvas app using HTTPS instead of HTTP. You can configure
your AWS instance with a self-signed SSL certificate during development
phrase and switch to a trial/cheap SSL certificate (trial certificates
can be obtained from <http://www.verisign.sg/> or
<http://www.rapidssl.com/>) once you are ready to publish your app. You
**must** specify this URL if you are developing a Facebook Canvas
application; otherwise you will see a blank page.

**Mobile Site URL:** If you have a mobile-friendly version of the
website you are building. We would advise you to adopt [responsive web
design](http://en.wikipedia.org/wiki/Responsive_web_design) so that you
don't spend too much time creating a whole new mobile-friendly version.\
<span>*For Standalone applications:*</span>

**Site URL:** This is the URL where your standalone app is located (such
as [http://ec2-174-129-70-144.compute-1.amazonaws.
com/some-dir/](http://ec2-174-129-70-144.compute-1.amazonaws.
com/some-dir/)). If you do not fill up this field, your standalone app
would not be authorized by Facebook and, thus, unable to use Facebook
API.

**Settings - Advanced**

**Deauthorize Callback URL:** The URL that Facebook would fetch when a
user removes your application and deauthorizes it. See the **Detecting
when people uninstall apps** section in [the
documentation](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.7).

**App Details - App Info**

These sections essentially describe your application. These fields would
be important when you are working on the next milestone. We leave it to
you to read the descriptions of the various fields before filling them
up.

**Roles - Basic**

Add your teammates as administrators/developers here. You might want to
add the teaching staff as testers of the app as well, so that they can
provide you with feedback while you are still developing your app.
However, before you can add them to your app, they will first have to be
your Facebook friends. For your benefit, here are links to their
Facebook profiles:

- Dr. Colin Tan - <https://www.facebook.com/pbear1973>
- Chin Su Yuen - <https://www.facebook.com/suyuen>
- Tay Yang Shun - <https://www.facebook.com/yangshun>
- Sun Wang Jun - <https://www.facebook.com/sunwangjun>
- Sam Mauris Yong - <https://www.facebook.com/sam.yong>
- Yeo Quan Yang - <https://www.facebook.com/quanyang>
- Lin Xuanyi - <https://www.facebook.com/lin.yi.71653>

**Open Graph:**

This is the place where you can create new Stories, Action and Object
types for your app to use. By specifying the types, your app can then
publish customized stories to users' News Feed or Timeline (i.e. "Colin
bought a Nala cat plushie" instead of "Colin liked a link".)

Remember that you can find out more about each of the fields by moving
your mouse cursor over the <span>**\[?\]**</span> symbol if there is
one. Do also consult the [Facebook
documentation](http://developers.facebook.com/docs).

<div class="box">
  <strong class="milestone-counter"></strong> Give your newborn application some love.
  Go to the <strong>App Details</strong> page and fill the page with as much appropriate information as
  you can. And yes, we expect a nice application icon!
</div>

We have finally gotten that out of the way. Did you remember to click
**Save Changes**?

#### Sidetrack: Software development models and Facebook

Okay, you are now perched on the threshold of the birth of your amazing
Facebook application. Before you get down and dirty however, we would
like to take discuss some high-level ideas that you should keep solidly
in mind during your Facebook development experience.

A software development model reflects the process through which your
software (in our context, your Facebook application) gets developed. A
common model you may have heard of is the [**Waterfall
model**](http://en.wikipedia.org/wiki/Waterfall_model), where your team
goes through a sequence of well-defined stages from planning and design,
through development and testing, and finally to release in one full
linear process. What we would like to drill into you at this point,
before you actually start laying out your plans, is this:

**DO NOT WATERFALL.**

Specifically, this means don't start with drafting out a large and
ambitious *mother-of-all-designs* and dividing the rest of your time
into slowly and methodically implementing that design. This is why
Facebook is interesting - the platform is such that traditional software
development models (like Waterfall) do not work well, because
applications on Facebook tend to be relatively small scale, and tend to
enjoy very intimate and rapid interaction with their users. Facebook
would probably have changed their API (again) by the time you were done
with your mega-scale application.

In such an environment, a much more sensible model is **rapid
deployment** and **incremental improvement**. This means you start off
by rapidly completing a small but workable application with your key
ideas in place, then push it out immediately for users to try it out.
Keep an open channel of communication with your users (use Facebook's
forum functionality and your application page's wall and Facebook's user
feedback/rating mechanism.) Note that this does not mean just sitting
there and reading your users' responses: interact with them, ask them
for suggestions and feedback, actively respond to their issues, and fix
bugs that they report. Then, *incrementally improve your application
along the direction of your user feedback*. Your users know best whether
they are happy with your application, so if they tell you that this
feature is difficult to use or that having such and such a functionality
would be nice, you better be busy taking notes and incorporating them
into your application's roadmap.

An excellent example of an incrementally-built web application would be
[**NUSMods**](https://nusmods.com). NUSMods started out as an easy-to-use
timetable builder and module finder for students. NUSMods 2.0 was
released in July 2014 to include more useful features like module
pre-requisite trees, historical CORS bidding data, and community-driven
module reviews. NUSMods relied on its Facebook page and a contact email
as channels of communication with its users to gather feedback regarding
the application and to determine which features were in demand.
Improvements were then made based on the collected feedback. Today,
NUSMods is practically used by the entire student population: in the
month of July 2016 alone, NUSMods had over 56,000 users and 1.8 million
page views. P.S. The creators of NUSMods are CS3216 alumni and some of your classmates
might have even contributed to the development of NUSMods. You have chosen the right module!

This is the kind of story we want you to experience while developing on
Facebook – a unique and successful relationship with real users.

## Phase 2: Toddler

> *"If you give a hacker a new toy, the first thing he'll do is take it
> apart to figure out how it works."*
>
> — Jamie Zawinski

Creating Facebook applications is similar to developing regular web
applications. This was not the case several years ago, where students
had to grapple with concepts such as FBJS (Facebook JavaScript - a
sandboxed version of JavaScript). Now you have to grapple with different
things; and at the rate Facebook is changing, there will be newer things
to learn in a few months. The Facebook environment is very dynamic and
things change often; be prepared to learn and re-learn (and curse like a
sailor when things break).

The first thing you should be aware of is that Facebook often update
their APIs with breaking changes. The current API version, version 2.7
of the Facebook Platform API is unlikely to be compatible with versions
before.

The next thing you should be aware of is the Software Development Kits
(SDKs) Facebook provides: the PHP and JavaScript SDKs. These help in
integrating your application with the Facebook platform and in using the
APIs. You can use either one for your applications; if you wish to use
both at the same time, it is easier to do so in Facebook Canvas
applications than in Standalone Applications.

The PHP SDK makes API calls from the your application web server while
the JavaScript SDK makes API calls from the client's web browser. The
question you would probably ask then is: "Why should I care where the
API calls are made from, so long as they are actually made?"

To begin answering this question, we need to understand how a network
requests work. When a user loads your application, a network request is
sent to your server. Your server picks up the request, figures out what
the user is looking for and executes the appropriate program. During
execution, the program may make other API calls and wait for their
responses. Once Facebook sends all required API responses, the script
finishes execution and the final result is returned to the user.

Let's suppose that each API call takes 300ms on average to complete,
especially because your web server is located far away from Facebook's
API servers. Now, if your PHP scripts make ten API calls, one after
another, the total execution time would be at least 3 seconds.
Therefore, each time your user loads your web application or clicks on a
link, he has to wait at least 3 seconds for a response. He will start
complaining that your app is "laggy" and he may stop using your
application altogether. Amazon Web Services has several geographical locations
from which you can set up instances. How does the location of your instance affect
the latency of your application?

You have several ways of remedying this issue.

You should optimize your programs so that redundant API requests are not
made. For example, if you use a result from an API call in a loop, you
could make the API call before the loop, cache the result and use that
in the loop instead of making repetitive calls within the loop.

You could also modify your application, removing less-important features
and only send API calls that are absolutely necessary for your
application to function.

You could also utilize the JavaScript SDK and make the API calls from
the user's browsers instead. For example, you might want to display the
user's profile picture in your application. Instead of retrieving the
link to the picture using the PHP SDK, you can retrieve the link with
the JavaScript SDK. This way, your web server can send responses to
users quicker since it makes fewer API calls to Facebook.

By now, you should have developed an intuition on what causes
applications to be "slow". Your application might appear to be more
performant by offloading some API calls to the JavaScript SDK. However,
in general performance is a complex issue and optimizations vary from
case to case. Do note however that "premature optimization is the root
of all evil"[^2]. Focus on the features first without being overly
worried about performance.

Facebook's Developer site provides excellent documentation on how to get started with their [PHP
and JS SDKs](https://developers.facebook.com/docs/apis-and-sdks). You'll be on your own here
to learn how to use them, which is an important skill for picking up ever-changing technologies.

It's not compulsory to use Facebook's SDKs when developing your application but you will have
a considerably harder time if you do not. If you decide to go with other languages for your server
side, you might want to look for 3rd-party Facebook SDKs for that particular language you have chosen.

### Using both the PHP and JavaScript SDKs

Now we get to something that lets us have even more fun than the
previous sections. Before moving on to the nitty-gritties, let's think
about why we would want to use both the JavaScript and PHP SDKs at the
same time when it is possible to create an application solely with just
one of either SDKs.

Well, we would when we want to combine the advantages of both.

Using the JavaScript SDK gives you the advantage of using any of
Facebook's social plugins, such as the Login button, easily. It also
makes it easy for you to pop up [dialogs to the
user](https://developers.facebook.com/docs/reference/dialogs/). On the
other hand, the PHP SDK is nice because you can make API calls from the
server side, get the results in nicely formatted arrays, and be able to
do any kind of processing you want. Having the power of both SDKs is
clearly advantageous. Unfortunately, there are some technical issues you
have to handle when integrating both SDKs – thankfully this is only a
one-time cost. Once you figure it out, you will have no problems using
both.

Login works perfectly fine using either of the SDKs because we are using
the Facebook SDK. Both SDKs also recognize the cookie created by the
other. If we Logout using the PHP SDK, we will still face the same
problem of the cookie not being cleared as explained in the previous
section. Same goes for Logging out with the JavaScript SDK – the cookie
needs to be cleared for the PHP SDK.

Another change that was required was that when we Login using the
JavaScript SDK, the page needs to be reloaded so that the PHP SDK can
read the session. There are other small tweaks that were needed to make
them both work together and you can figure them out by looking at the
code.

The goal of this section is to demonstrate some of the trickiness you
will face when working with Facebook. We also wanted to provide some
possible solutions and explain how they work without resorting to
spoon-feeding. Handling such issues is part-and-parcel of creating web
applications and using APIs provided by others. Be adaptable and be open
to learning, these things should then not bother you too much. If you
have any questions about what we have discussed, feel free to ask in the
forums.

<div class="box">
  <strong class="milestone-counter"></strong> Integrate your application with Facebook.
  If you are developing a Facebook canvas app, then users should be able to visit your app
  and at least see their name (retrieved using the API) on the page. Similarly, if you are
  developing a standalone app, users should be able to login to your app using their
  Facebook account and see their own name appearing.
</div>

There is one last thing we would like to highlight. When creating a web
application, you may often find that you need to control the visibility
of certain elements. For example, you wouldn't want to show the "login"
link when the user is already logged in since that would just confuse
the user. In our sample code, we demonstrate two common techniques of
accomplishing this.

The first technique is to use JavaScript and CSS. Look at the Login and
Logout link. By default, their CSS properties are set so that they are
invisible. Then, we ask the JavaScript SDK if the user is logged in.
When we get our response, we make the appropriate link visible. The
second technique is to use server-side rendering. The server renders the Login
button only when it detects the user is not logged in.

There are differences between both techniques and we could just state
what they are, but that's no fun. So we leave it to you to figure out
and tell us.

<div class="box">
  <strong>Bonus:</strong> What are the pros and cons of each method of visibility control?
  When should one use the JavaScript method and when should one use the server-side method? (1%)
</div>

## Phase 3: Child

> *You can learn many things from children. How much patience you have,
> for instance.*
>
> — Franklin P. Jones

Now that you are familiar with the basic Facebook building blocks, it is
time to graduate to the more complicated toys. In this phase, we will
learn how to store persistent data! To be more precise, we are going to
store data about our application's users in a MySQL database.
Well, actually any SQL-based database system will do.

### An Overview of Relational Databases

A relational database is a type of database that models stored data as
tables with columns and rows. It is called "relational" because you can
link a table to another table through *foreign keys*.

In this section, we will be going through simple relational database
concepts. There are some other more advanced concepts that you can read up online.

A database application may store several *databases*. Hence, while each
application will usually use its own database, several applications may
share the same database application running on the same server (e.g. if
you and a friend each have a blog, even if each blog needs 1 database
you could still house both blogs on the same MySQL instance).

Visualizing a database at highest level, we think about a *schema*,
which is basically a blueprint of the database's tables, their
structural details, and the relationships between them.

Schemas define two things: *tables* and *relations*. Tables contain one
or more columns each. For example, we can imagine a
`students` table containing 5 columns:
`matric_no`, `name`, `address`,
`phone`, `birthdate`. Each column has a `type`
that you need to specify (e.g. `name` is of type text,
`birthdate` is of type date). Actual data will then be simply
stored as rows in the table.

Each row needs to be uniquely identifiable. If two rows happen to be
completely identical, you will run into trouble trying to update or
delete them since there is no way to pinpoint exactly which one you
mean. Thus, we usually have a column (or a set of columns in
combination) that we require to be unique for each row. We call this the
*primary key*. In the `students` table example, the
`matric_no` column is an excellent candidate for primary key
since no two students share the same matric number. MySQL (and any other
proper database system) will prevent you from inserting a row if there
already exists another row with an identical primary key.

Relations indicate relationships between tables. For example, suppose we
add a `home_faculties` table containing two columns:
`matric_no` and `faculty` – a simple mapping of
student to faculty. We can link this table to the previous
`students` table using the `matric_no` column,
which both tables share. We say that `matric_no` in the
`home_faculties` table is a *foreign key* that *references*
the `matric_no` column in the `students` table.
Note that a foreign key column set must reference a primary key column
set of another table. Note also that our two-table set up allows
students to become members of two faculties (e.g. when doing double
degrees). This is a small space to attempt a proper introduction to
relational database concepts. For better or further understanding,
you might want to look up additional descriptions online.

<div class="box">
  <strong>Bonus:</strong> What is the primary key of the <code>home_faculties</code> table? (0.5%)
</div>

Other important concepts include *indexed columns* (allowing searches to
be fast), *unique keys* (enforcing uniqueness for non-primary key
columns), and relation cascades (where deleting a student from the
`students` table can automatically update/delete all entries
in other tables that reference this table). It's up to you to learn about all these on your own.

After this section, you should be ready to produce a schema
for your application. Do consider how efficient your schema will be;
specifically, think about the number of queries required to accomplish
common tasks and the number of tables accessed to complete a single user
query. Your schema should be graphical, and should indicate clearly the
table names, column names/types, primary keys, and relationships.

You should remember that as a rule of thumb, database schemas should be
planned with a **design once use forever** principle in mind. You should
spend a good amount of thinking on a good schema design, after which you
should almost never need to touch the design again. No idea how to draw it out?
Think simple. Annotated boxes and arrows are fine - just make sure the design is
clearly communicated. Of course, we also accept proper entity-relationship diagrams.

<div class="box">
  <strong class="milestone-counter"></strong> Draw the database schema of your application.
</div>

### SQL: Querying the Database

SQL is a standard language designed to manage a database and to retrieve
or store data in a database. In addition to SQL, most database systems
will have several additional SQL-like commands that are used to perform
specific administrative tasks like adding new users or modifying
passwords.

MySQL provides commands you can use to
create and alter databases and tables, and also commands you can use to
insert, update, delete, and retrieve rows from tables. We call the
former "data definition language" (DDL), and the latter "data
manipulation language" (DML). You should **never** run DDL commands from
publicly accessible pages (including your application pages that can be
accessed from Facebook.)

Most of time, it is not a good idea to write raw SQL queries yourself. We recommend that you look up
database connectors and ORM tools for the language/framework you intend to use.

<div class="box">
  <strong class="milestone-counter"></strong> Share with us some queries (at least 3)
  in your application that require database access. Provide the <em>actual SQL queries</em>
  you use and explain how it works.
</div>

### Facebook Graph API

It's time to begin discussing the Facebook Graph API. At the core of
Facebook is the social graph[^6], a data structure where objects on
Facebook (such as posts, comments, images, user profiles, and fan pages)
are uniquely identified. Objects have connections between them if they
have some relation. For example, a user in the social graph would be
linked with the posts he makes. The Graph API is an attempt by Facebook
to expose this social graph to developers in a clear and consistent
manner.

The key idea you have to remember is that every object in the graph is
associated with at least one unique identifier. Some objects have more
than one identifier: for example, you could refer to a user using either
his Facebook ID or Facebook username. However, each identifier is
associated with one (and only one) object. You would never encounter a
case where a single Facebook ID is associated with two different users.

When you pass an identifier to the Graph API, it will return some basic
information about the object. The exact information you get depends on
the kind of object the identifier is referring to. Owing to the design
of the Graph API, retrieving additional information about an object or
retrieving related objects is a simple case of extending your query in a
natural manner.

The Graph API is very extensive and we cannot completely explore it
here. You are **strongly** encouraged to look at the [Graph
API documentation](https://developers.facebook.com/docs/graph-api). The
documentation clearly lists all the information you can retrieve with
the Graph API.

One useful tool you should experiment with is the [Graph API
Explorer](https://developers.facebook.com/tools/explorer). We will now go
through examples on how to navigate the Graph API Explorer to aid
development.

Say you want to get a list of posts from NUSMods' Timeline. Replace the
path in the Graph API text box with the following:

~~~
NUSMods/feed?fields=message,id
~~~

and click **Submit**. You should be able to view an array of posts from
NUSMods' Timeline.

    {
      "data": [
        {
          "message": "Seriously guys, try out the Dark Mode. Just press \"X\" and see how pretty it is! You won't regret it!",
          "id": "103575576455632_924503301029518"
        },
        {
          "message": "Here’s a shoutout to all incoming freshmen! Our dear NUSWhispers admin Nicholette ...",
          "id": "103575576455632_923207487825766"
        },
        ...
      ],
      "paging": {
        "previous": "...",
        "next": "..."
      }
    }

This particular case involves the Edge *feed* that belongs
to the Node *page* (NUSMods) as described in the Graph API
[/page/feed](https://developers.facebook.com/docs/graph-api/reference/v2.7/page/feed)
reference. This is just one of the many APIs available for use.

How about viewing your own Timeline? **Replace** `NUSMods` with `me`[^7] and click **Submit**.

Oops, there seems to be no data shown. Why is that so? You will need to select specific
*permissions* via the **Get Token -> Get User Access Token** button. For this case,
we will check `user_posts` under **User Data Permissions** and click **Submit** again. You can now see a
list of your posts from your Timeline!

Suppose we now wish to see the comments associated with the posts, we
will need to add the `comments` field. This can be done in the Edge
sidebar by clicking on **Search for a field**, or on the "+" to the left
of it.

Click **Submit** to view the new output! Try it with the NUSMods page too:

    {
      "data": [
        {
          "message": "Seriously guys, try out the Dark Mode. Just press \"X\" and see how pretty it is! You won't regret it!",
          "id": "103575576455632_924503301029518",
          "comments": {
            "data": [
              {
                "created_time": "2016-08-05T07:12:46+0000",
                "from": {
                  "name": "Hew Foong Chuan",
                  "id": "10205737957308558"
                },
                "message": "Is there a channel go through to place a feedback on the app?",
                "id": "924503301029518_924536684359513"
              }
            ],
            "paging": {
              "cursors": {
                "before": "MQZDZD",
                "after": "MQZDZD"
              }
            }
          }
        },
        ...
    }

Apart from simple `GET` requests like the ones shown above, some of the
API end points allow you to issue `POST` or `DELETE` requests to manage the
data associated with the it.

There is one final note we wish to make before moving on. So far, in
this section, we have only accessed the Graph API via our browser. But
you would possibly be using the PHP or JavaScript SDKs when developing your
applications. When accessing the Graph API using the SDKs, just specify
the identifier directly and optionally, add the *fields*
parameter. You do not have to specify the URL
<https://graph.facebook.com>.

In closing, remember to look at the documentation and play with the
Graph API explorer tool. If you have questions, ask your friendly tutors or
post in the IVLE forums.

### Facebook API and Permissions

When we talked about the Graph API earlier, we only went through really
simple examples. But if you want to use any of the more powerful
features, you would need to get the user's permission. For example, if
you want to retrieve the photos uploaded by a particular user, you need
to request the `user_photos` permission. If you wanted to
know the user's relationship status, you would request the
`user_relationships` permission. Facebook maintains a list
of all the available permissions in [their
documentation](https://developers.facebook.com/docs/facebook-login/permissions).

You should try your best to only request a small number of permissions
that are absolutely necessary. That way, a user is more likely to grant
you those permissions. Requesting many permissions at one go tends to
make users question the intent of your application. In general, it is a better idea to
request permissions when the user triggers that feature. Requesting the permission to post
on the user's timeline only when the user enables such a feature is better than
requesting the permission when the user first signs up for your application.
This is because users can associate your permission request with what they are
intending to do, and they are more likely to grant you that permission. As a developer, you
should follow certain codes of conduct. When users give you permissions,
they are actually trusting you. Do not betray that trust and do not
misuse the power granted to you. Furthermore, if users elect not to
grant those permissions, your application should continue being
functional instead of completely breaking down.

<div class="box">
  <strong class="milestone-counter"></strong> Show us some of your most interesting Graph queries.
  Explain what they are used for. (2-3 examples)
</div>

## Phase 4: Teen

> *"The ultimate metric that I would like to propose for user
> friendliness is quite simple: if this system was a person, how long
> would it take before you punched it in the nose ?"*
>
> — Tom Carey.

The teenage years are filled with social acceptance and self-importance.
We are going to explore the use of feeds to advertise your apps, employ
Google Analytics as a measure of self-importance, and polish your apps
to improve user experience.

### Feeds

Feeds can be great at keeping users happy and at advertising your
application to non-users. Users tend to like feeds from your application
when it brags about something they did (like in JFDI Academy, where
CS1101S students will publish feeds to announce to the world that they
have levelled up). Non-users will see your application feeds on their
friends' profiles and might get intrigued enough to try out your
application.

Unfortunately, feeds are double-edged swords. Use them distastefully and
you may cause your application more harm than good. Do you remember all
those annoying applications that kept spamming you with feeds you do not
care about? Avoid that. If you keep annoying your users, they will
eventually stop publishing anything from your app. Remember, a feed
should make sense and add real value to the user experience.

There are two ways to publish feed stories. The first way is to use the
Graph API. By issuing a post request to `<PROFILE_ID>/feed`
with the [appropriate
parameters](https://developers.facebook.com/docs/reference/api/user/),
you can directly publish a feed to the user's profile. You will need the
`publish_actions` permission to use this API.

The second way of publishing a user's Facebook timeline is more polite.
In this method, you will show him a [Share
dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)
and provide him the choice to either publish to Facebook or ignore it.
The user also has the ability to customize the message in the post.
Another benefit with this method of publishing posts is that you do not
request the `publish_actions` permission (or any other
permissions). The following sample code demonstrates how to pop up the
feed dialog to the user using the JavaScript SDK.[^8]:

    <script type="text/javascript">
      FB.ui(
        {
           method: 'share',
           href: 'https://developers.facebook.com/docs/'
        },
        function (response) {
          if (response && !response.error_code) {
            console.log('Posting completed.');
          } else {
            console.log('Error while posting.');
          }
        }
      );
    </script>

<div class="box">
  <strong class="milestone-counter"></strong> We want some feeds! BUT remember to put thought into
  this. Nuisance feeds will not only earn you no credit but may incur penalization!
</div>

### The Like Button

One of the interesting things that Facebook has gifted onto the world is
the Like button. It became very popular shortly after it was released.
Ordinary people use it to express their interest in something and to
share cool stuff with their friends. Companies use to it to promote
their products and services. We will show you how to place Like buttons
in your application, then it is your job to think about using them in
creative and meaningful ways.

The easiest way of adding a Like button is to use the XFBML
<span>fb:like</span> tag. This is how you would place it in your app:

    <fb:like href="http://www.comp.nus.edu.sg/~cs3216/"
        width="450" show_faces="true" font=""></fb:like>

Similarly, you could use pure HTML:

    <div class="fb-like" data-href="http://www.comp.nus.edu.sg/~cs3216/"
    "data-width="450" data-show-faces="true" data-send="true"></div>

One thing worth noticing is just both of the above mentioned methods
require the use of JavaScript SDK. Alternatively, you could use the
following method:

    <iframe src="http://www.facebook.com/plugins/like.php?app_id=YOUR_APP_ID&
                    href=THE_LINK_TO_LIKE&layout=standard&
                    width=450&show_faces=true&action=like&
                    colorscheme=light&font&height=80"
            scrolling="no" frameborder="0" style="border:none; overflow:hidden;
     width:450px; height:80px;"
            allowTransparency="true"></iframe>

This method loads a Facebook `<iframe>` that just
contains the Like button.

Do refer to the
[documentation](https://developers.facebook.com/docs/plugins/like-button)
as it explains how to customize the Like button and how to also include
a Share button to let users easily share things they find cool.

<div class="box">
  <strong class="milestone-counter"></strong> Your application should include the Like button
  for your users to click on. Convince us why you think that is the best place you should
  place the button.
</div>

### Facebook and Privacy

Since you are creating a social application, it is time to talk about a
very important topic: user privacy. Clearly, the Internet has become a
huge part of people's lives. People usually have a expectation that
their personal data is safe and will not be shared with anyone without
their consent. When a company fails to meet that expectation, things
become ugly.

Facebook has violated the privacy of its users many times in the past.
For example, there was an incident where this guy was purchasing a ring
for his wife as a Christmas gift. It turns out that the website he was
buying the ring from was using the Facebook Beacon, a feature that
allowed site owners to publish their users' actions on Facebook easily.
When the guy bought the ring, a feed was posted on his wall without his
consent or knowledge, announcing his purchase to everyone. Needless to
say, there was a massive backlash and Facebook
[removed](http://www.washingtonpost.com/wp-dyn/content/article/2007/11/29/AR2007112902503.html)
the Facebook Beacon feature.

Facebook has since adopted more privacy-concious practices. As a
developer, you cannot just access your users' data willy-nilly: you need
to ask them for permission first. And even if you have permissions, you
can't use the data as you please because you are bound to terms and
conditions of Facebook.

When a user removes your application, you get notified via the
<span>**Deauthorize Callback**</span> URL. This begs the question: what
do you do with the user's data when he removes your application? Do you
delete the data or do you still keep it in your database? If you decide
to keep the data, are you violating Facebook's Terms and Conditions?

<div class="box">
  <strong class="milestone-counter"></strong> Explain how you handle a user's data when
  he removes your application. Convince us that your approach is necessary and that it is
  the most logical. Do also include an explanation on whether you violate Facebook's terms and
  conditions.
</div>

### Google Analytics

Web developers are often obsessed with the usage statistics of their
applications. You should be too! Let us use Google Analytics to track
usage of your application: it is a very popular tool that offers
detailed analysis of your users. It shows you which countries your users
are using your application from, what browsers they are using, what
their screen resolutions are, and so on.

These information will help you greatly in making your users happy.
Knowing where most of your users are from will allow you to decide if
you can cater your content to a particular demographic. Knowing the
screen resolution of your users lets you determine the above-the-fold
screen real-estate (the parts of your pages that are viewable directly
without scrolling down, assuming a maximized standard browser window in
the chosen resolution). Knowing the breakdown of the browsers used by
users would be useful in determining whether you need to spend more time
testing your features in those browsers.

To add Google Analytics, start by exploring the [Google Analytics
website](http://www.google.com/analytics/) and create an account. You
might also want to take a look at the [Social
Interactions](https://developers.google.com/analytics/devguides/platform/social-interactions)
feature for additional metrics on your users. Note that you have to have
installed Google Analytics for at least 48 hours before the submission deadline
as Analytics only updates its reports once per day.

Do note that Google Analytics is not the only tool to get metrics on
your users. You can also use [Facebook
Insights](https://www.facebook.com/insights/), the analytics tool
designed to work with Facebook applications. In certain cases, Facebook
Insights can provide more information than Google Analytics about your
application. We focus on Google Analytics here because it is more
generic, but we want you to be aware of alternatives.

<div class="box">
  <strong class="milestone-counter"></strong> Embed Google Analytics on all your pages and
  give us a screenshot of the report.
</div>

### User Experience

A good application, web or otherwise, needs to provide a good user
experience. Some companies even perform user experience research to
determine whether changes to an application's UI affect users in a good
way. We certainly do not expect that level of polish, but we do hope
that you are always constantly bearing the user experience in mind when
designing your application.

User experience is usually judged based on how easy and, more
importantly, how intuitive the user interface is from the users' point
of view. A good-looking UI helps too (though a pretty UI that is a pain
to use is much worse than an okay-looking UI that has pleasant
interaction.) This section reminds you to consider every interaction
your users have with your application and make to them user-friendly. An
interaction is the complete sequence of steps users need to perform
through your application's UI to accomplish a single coherent operation
(e.g. posting photos in the Photos application or deleting timeline
posts).

User interactions that you expect to be frequently used should be the
easiest to use and the easiest to find. A to-do list application that
asks you to go through a sub-menu and several wizard pages probably will
not gain much traction. First impressions matter too, so if your
application requires elaborate steps to install, please spend some time
to make those steps bearable and pleasant for the user.

If you have carefully considered the design of your application, this
section should not be difficult to score well for, and would serve as a
reminder that user experience plays a large role in determining how
successful your application will be.

<div class="box">
  <strong class="milestone-counter"></strong> Describe 3 user interactions in your
  application and show us that you have thought through those interactions.
  You can even record gifs to demonstrate that interaction! It would be great if you
  could also describe other alternatives that you decided to discard, if any.
</div>

### jQuery

And here we come to a really fun part of this assignment. This
subsection and the next three subsections will deal exclusively with
jQuery, along with some animation and AJAX.

Most modern web applications use plenty of JavaScript. In case you were
mistaken, JavaScript, despite its name, has nothing to do with the Java
programming language. With JavaScript you can create animations, you can
modify the loaded page on the fly, you can even send a hidden request to
your server to fetch new data. The language itself is pretty (though it
can get really ugly quickly if one is not careful). It is
dynamically-typed, with very flexible object-oriented support and tt
supports functions as first-class objects.

However, developing in JavaScript causes a few problems to developers.
Firstly, different browsers and different versions of these browsers
have slight deviations from the published standards. Therefore,
developers may need to prepare different sets of code to cater to
different browsers. As applications get more complex, it becomes
increasingly painful to write many lines of code just to get a simple
task done.

This has led to the development of JavaScript libraries which serve as
an abstraction layer for common web scripting. These libraries try to
automatically handle browser-quirks, leaving you free to implement your
app. Examples of JavaScript libraries are Prototype, jQuery, ExtJS etc.
In this assignment, we will show you how to use
[jQuery](http://jquery.com/).

To start using jQuery, you can download the code from
<http://code.jquery.com/jquery-2.1.4.min.js>. This is the main library
file of jQuery and in order to use jQuery, you need to include this file
in the <span>&lt;head&gt;</span> of the HTML document that you are
working on.

One last thing before we can discuss jQuery: let's introduce ourselves
to the DOM. That is, the Document Object Model. Think of a HTML document
as a tree. Each HTML tag and contiguous text contained in the document
is a node in the tree, and each nested tag is a child node of its parent
tag. The tag attributes become attributes of the node. All these form
the DOM.

JavaScript provides you methods to traverse and manipulate this tree;
you can add, remove, or modify any nodes in the tree (as long as they
result in a valid document). This explanation may sound a little fluffy,
but the main gist is that changes in the DOM tree are in turn reflected
in the actual displayed HTML page. The DOM thus ends up being a useful
abstract model through which you could program dynamic web content in a
systematic and elegant manner.

In jQuery, the most fundamental operation is selecting a part of the
document. This is done with the <span>jQuery()</span> function. Assuming
that you have a DOM object with class <span>sample-class</span>, you can
access the object via the following function call:

     jQuery('.sample-class') // or $('.sample-class')

Take note of the <span>.</span> in front of <span>sample-class</span>.
In CSS, prefixing an identifier with <span>.</span> indicates that the
identifier references the class of the object. jQuery uses CSS selectors
to find objects in the DOM. In other words, the above code is accessing
the object with class <span>sample-class</span>. Likewise,
<span>\#</span> refers to the id of the object. So, if the DOM object's
ID is <span>sample-id</span>, you can access it via the following
function call:

     jQuery('#sample-id') // or $('#sample-id')

This is the basic method of accessing individual DOM elements. There are
also other ways of accessing DOM elements. For more information, refer
to the [jQuery
documentation](http://api.jquery.com/category/traversing).

Traditionally, to run some piece of JavaScript code after the page has
loaded completely (including all of its images), we would rely on the
<span>onload</span> handler. We will first define the code that needs to
be executed and place it in a function:

    function sampleFunction() {
      //some code
    }

Then, we will attach this function to the <span>onload</span> event by
modifying the HTML <span>&lt;body&gt;</span> tag:

        <body onload="sampleFunction();">

This causes our code to run after the page is completely loaded.
However, there are drawbacks to this approach. For one, the code lies
within the HTML. This tight coupling of structure and function clutters
the code, thereby requiring the same function calls to be repeated over
many different pages. In the case of other events such as mouse clicks,
function calls will be made over every instance of an element on a page.
Adding new behaviors would then require alterations in two different
places, increasing chances of making errors.

To avoid this pitfall, jQuery allows us to schedule function calls for
firing once the DOM is loaded, without waiting for images, with the
[jQuery(document).ready()](http://learn.jquery.com/about-jquery/how-jquery-works/)
construct.

Thus, the structure for jQuery file will be as follows:

    jQuery(document).ready(function(){
      // Your code here
    });

<div class="box">
  <strong class="milestone-counter"></strong> Show us an interesting DOM manipulation
  through jQuery that occurs in your application.
</div>

## Phase 5: Young Adult

> *I look back five years ago, when I thought I was an adult and knew
> everything about the world, and I realize I knew nothing.*
>
> — Neve Campbell

### Timeline and Open Graph

Facebook launched its Timeline feature awhile back and it had mixed
reviews - some users liked it, some hated it. But popular apps have all
integrated very well with the Timeline and have seen a good number of
visitors[^9].

But before we ask you to do anything with the Timeline, let's take a
look at what all we can do with [Open
Graph](https://developers.facebook.com/docs/opengraph/overview). Make
sure you read the linked document as it explains what you can do with
Open Graph. You should now be thinking about the Actions and Objects
that you could possibly create for your application. You can set up the
Actions, Objects and Stories by going to your application's dashboard
and clicking on the **Open Graph** section. Facebook has a
[tutorial](https://developers.facebook.com/docs/opengraph/getting-started)
as well as detailed
[documentation](https://developers.facebook.com/docs/opengraph/using-objects)
which you can use to familiarize yourself with the API.

**NOTE:** All apps that want to use Open Graph must go through a review
process (generally a few days) for the stories they create. You should
therefore submit these for approval early. Read more about this under
the **Review Process** section on [this
page](https://developers.facebook.com/docs/opengraph/overview/).

<div class="box">
  <strong class="milestone-counter"></strong> Implement at least one Story involving an
  Action and Object in your application. Describe why you think it will create an engaging
  experience for the users of your application.
</div>

### jQuery Animations (Optional)

**This section is optional. Completing milestone(s) described in this
section *may* contribute to the 30% coolness factor.**

Our warnings at the section on Feeds apply here too. Animating your
pages may spice up your applications, possibly making it easier and more
fun to use, and may even earn you cookies (and coolness points!) But too
much of it (or even small amounts of badly done ones) can backfire
badly. Exercise your better judgement before indiscriminately adding
animations to everything in sight, just because you know how to do it.

jQuery provides [several
methods](http://api.jquery.com/category/effects/) to add animations to
your application. Animations, such as <span>show()</span> and
<span>hide()</span>, can be triggered by
[events](http://api.jquery.com/category/events) such as mouse clicks.

Assuming you have the following DOM element:

    <div id="sample-id"> This is a div </div>

To hide this element, you can execute the following jQuery statement:

    jQuery('#sample_id').hide();

To show this element over a period of 1 second, you can execute the
following jQuery statement:

    jQuery('#sample-id').show(1000);

The above two methods are simple effects bundled with jQuery. To create
more elaborate animations, jQuery provides us with the
<span>.animate(Properties, \[Duration\], \[Easing\],
\[Complete\])</span> method. This method accepts four arguments:

-   **Properties** - Mapping of CSS properties such as opacity, height,
    width for the animation

-   **Duration (optional)** – You can use strings such as
    <span>fast</span>, <span>slow</span>, or a number (in terms
    of milliseconds) to control the duration of the animation

-   **Easing (optional)** – This specifies the speed at which the
    animation progresses at different points within the animation

-   **Complete (optional)** – The function to call when the animation is
    completed

If you look carefully at the parameters of the <span>.animate()</span>
method, you should realise that <span>.show()</span> and
<span>.hide()</span> can be implemented by passing the appropriate
values to <span>.animate()</span>. In fact, the <span>.show()</span> and
<span>.hide()</span> methods *are* actually shortcut methods for
<span>.animate()</span>. Several other similar shortcut methods exist;
thus, it would be wise to consult the jQuery documentation before
proceeding to implement your own custom animation. If jQuery animations don't rock your boat,
you can use CSS3 animations instead.

<div class="box">
  <strong class="milestone-counter"></strong> Describe 2 or 3 animations used in your application
  and explain how they add value to the context in which they are applied. (Optional)
</div>

### AJAX (Optional)

**This section is optional. Completing milestone(s) described in this
section *may* contribute to the 30% coolness factor.**

AJAX stands for Asynchronous JavaScript and XML. Despite the name you
almost never need to get your hands dirty manipulating XML when using
AJAX. When we discuss AJAX calls, what we are really talking about is an
asynchronous communication with the server, usually to notify the server
that something has happened, or to fetch some data from the server.

Generally, since JSON is built upon JavaScript syntax, it is more
natural to use JSON than XML as the data representation when
communcating with the server. Regardless, it is possible to use XML as
the data interchange format and normal XML manipulation can be done
within JavaScript.

### Asynchronous vs. Synchronous

A synchronous request is one in which the user is no longer able to
meaningfully interact with your application once it has been issued.
Clicking on a link, or reloading the current page are both examples of
synchronous events. On the other hand, an asynchronous request allows
users to continue viewing and interacting with the current page as
sending the request and receiving the response occurs in the background
– hence "asynchronous". This may result in a more "app"-like experience.
Asynchronous calls are not necessarily faster or more responsive,
however, as improper use of asynchronous calls may in fact make your
application seem *less* responsive.

A potential benefit of asynchronous calls is that the server need not
send an entire HTML page back as the response, since the script on the
client can display the data appropriately for the page. For example, in
a normal (non AJAX) blog, when you post a comment, the server will
regenerate and send the entire blog page back to your browser with your
new comment included (hence the page reload.) In contrast, posting to
your Timeline on Facebook (which *is* sent via AJAX), there is no page
reload and yet your post appears on the page. In this instance, after
processing, Facebook's servers only send the modified part of the page
(which is your post) and the JavaScript which has already been loaded
will dynamically add the new content without reloading. This is what
makes asynchronous calls faster (or, at least, *appear* faster).

Note that a (not necessarily undesirable) side effect of AJAX is that it
is completely invisible to the user – the browser does not give any
visual cues that your script had issued an AJAX request. This is
sometimes what you want; oftentimes however, it tends to lead to the
false impression that your application did not respond to a user event
(especially so if the call was triggered say by clicking the **Submit**
button.) In such cases, it may be wise to implement your own set of
visual cues – display a loading indicator and while your AJAX request is
in progress, and remove it when it completes.

### AJAX in jQuery

jQuery [provides APIs](http://api.jquery.com/category/ajax/) to easily
make AJAX requests. In this section we will discuss some of the most
common functions that you will likely use in this assignment.

To improve page load times, a common technique employed is to include
only essential information in the web page while loading everything else
in the background or only when an event is triggered. jQuery provides us
with the <span>.load()</span> method to implement this easily.

Assuming you have a <span>&lt;div&gt;</span> with the id
<span>sample-id</span>, you may wish to load some content into this
element. Further supposing that the content resides in
<span>sample.html</span> on the server, you can execute the following:

    jQuery('#sample-id').load('sample.html', function () {
      alert('The data is loaded.');
    });

The code above will load the contents of the file
<span>sample.html</span> from the server. When the request has
completed, the <span>&lt;div&gt;</span> with the ID
<span>sample\_id</span> will have its contents replaced by the response,
and the callback function will run.

This is an elegant way of pulling in fully-formed HTML on demand.
However, you might prefer to retrieve some raw data and do some
processing it before rendering. jQuery also provides
<span>.getJSON()</span> to retrieve the data in JSON format. Assuming we
have a JSON file <span>sample.json</span> on the server, the following
code will allow us to retrieve the object stored in the file:

    jQuery.getJSON('sample.json', function (data) {
      // Do something with obtained data
    });

Sometimes, we might also need to send data to server for processing.
jQuery allows this through the use of <span>.get()</span> and
<span>.post()</span>.

Assuming we wish to send a variable <span>sample\_variable</span> with
the value 1000 to the webpage <span>sample.php</span>, we will execute
the code as follows:

    $.post('sample.php', {
        sample_variable: 1000
      }, function (data) {
        //process the server response here
      });

The first argument is the web page you wish to send the data to. The
second argument is in a JSON format, indicating the data you wish to
send to the server. The third argument is a callback function meant for
processing the response received from the server.

The syntax for <span>.get()</span> and <span>.post()</span> is very
similar. One of the main differences is that GET places its arguments in
the query string portion of the URL, whereas POST requests do not. The
main reason for choosing one method over the other is the size of data
you wish to send to the server. GET usually has a much lower limit on
the data size.

<div class="box">
  <strong class="milestone-counter"></strong> Describe how AJAX is utilised in your application,
  and how it improves the user experience. (Optional)
</div>

### jQuery Plugins (Optional)

**This section is optional. Completing milestone(s) described in this
section *may* contribute to the 30% coolness factor.**

One of the more powerful aspects of jQuery is its ability to incorporate
plugins developed by third-party developers.

To use a plugin, you need to first include the plugin in the
<span>&lt;head&gt;</span> of the document. Ensure that the core jQuery
file is included before the plugins.

    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
        <script src="jquery.js" type="text/javascript"></script>
        <script src="plug-in.js" type="text/javascript"></script>
        <script src="your_application.js" type="text/javascript"></script>
    </head>

After including the plugin, you can include application scripts that
make use of the plugins.

There are many plugins available: you can search for them at the [jQuery
Plugins Repository](http://plugins.jquery.com/).

<div class="box">
  <strong class="milestone-counter"></strong> Tell us how you have made use of any existing jQuery
  plugins to enhance your application functionality. Impress us further by writing your
  own reusable jQuery plugin. (Optional)
</div>

### Grading Scheme

The grading of the assignment is divided into two components: satisfying
the milestones (65%) and the coolness factor (35%). Not including
Milestone 0, there are **17 milestones** in total: three are optional
(Milestones 15, 16, and 17) and one is not graded (Milestone 2). That
leaves you with 13 compulsory milestones and each of them is worth 5%.

The bonus milestones and the optional milestones will contribute
towards the remaining 35%.

This assignment has 2 key deliverables: a mid-assignment submission and
the final submission itself.

#### Mid-assignment Submission (due Friday, 19 August 2016, 23:59):

-   A short write-up on your application idea and execution plans
    (see Milestone 1). **Restrictions:** no longer than a double-sided
    A4 sheet of paper.

-   Make sure you have completed Milestone 3 (and yes, we do want a
    pretty icon!)

-   Application URL. Your application must already be online. Things
    need not be perfect but a fair portion of the functionality must
    be working. This is a sanity check for you because you do not have
    much time between the mid-assignment milestone and the
    final submission.

-   A SQL schema (for Milestone 5). While your schema may change in the
    following week, we will grade the SQL schema here. Be sure to
    plan well.

-   Answers to the bonus milestones (if you decide to attempt them.)

#### Final Submission (due Friday, 2 September 2016, 23:59):

-   Completion of all compulsory milestones (up to Milestone 14).
    Submit your answers in a write-up and categorize your answers by the
    milestones they belong to.

-   Another separate write-up pitching your application to the teaching
    staff, i.e. convince us that your application is so good that it
    deserves all 30% of the coolness points. **Restrictions:** no longer
    than 2 A4 sides.

Mode of Submission
==================

**For the mid-assignment submission**, please submit a single document,
uploaded to the IVLE workbin. If you use an online collaboration tool
such as Google Docs, please download a PDF copy and upload it to IVLE.

**For the final submission**, please make sure your Git repository
contains the following:

1.  A <span>README</span> file containing the matriculation number and
    name for each member of your group. Also list contributions made by
    each members. Make sure that your application name is clearly
    written in the <span>README</span> file. You may also provide a list
    of changes that you have made to your original idea submitted in the
    mid-assignment write-up.

2.  A write-up, `group-<number>-milestones.pdf` containing
    your answers to all compulsory milestones that require
    written answers.

3.  A one/two-page pitch of your application,
    <span>group-&lt;no&gt;-pitch.pdf</span> to convince the each staff
    that your application is so good that it deserves full marks
    for coolness.

4.  Source code: place the source code in a sub-directory called
    <span>src</span>. Make sure that the directory structure
    remains intact.

5.  Proof of working application: either publish your application
    publicly and provide a link to the main page of your application in
    your <span>README</span> file, or add all the teaching team members
    as co-developers of your application.

As a reminder, there are a total of **17 milestones** (excluding Milestone 0)
in this assignment. 3 of these milestones are optional and Milestone 2 is not graded.

Clarifications and questions related to this assignment may be directed
to the IVLE Forum under the header "Assignment 1: Life of a Facebook
Application".

Good luck and have fun!

Appendix - Privacy Policy
=========================

This Privacy Policy describes how users' personal information is handled
in order to engage in the services available on our application. It
applies generally to web pages where this policy appears in the footer.
By accepting the Privacy Policy, you express consent to our collection,
storage, use and disclosure of your personal information as described in
this Privacy Policy. This Privacy Policy is effective upon acceptance
for new users and is otherwise effective on <span>Wednesday, 8 August
2016</span>.

### Definitions

1.  References to "Our", "We", "Us" and **\[Your Application Name\]**
    shall be references to **\[Your Application\]**

2.  References to "You", "Users" and "Your" shall mean references
    to user(s) visiting this web site, as the context requires.

### Information Collection

Browsing our websites does not require your identities to be revealed.
However, under the following circumstances, you are not anonymous to us.

### User

We will ask for your personal information. The personal information
collected includes but not restricting to the following:

1.  Private information such as name and birthdate

2.  Contact information such as email address, mobile number and
    physical address

3.  Additional information which we may ask for if we believe the site
    policies are violated

Once you log into the account, your identity will be revealed to us.

### Information Usage

The primary purpose in collecting personal information is to provide the
users with a smooth and customized experience.

We will use the information collected for the following purposes

1.  To provide its intended services

2.  To resolve disputes, and troubleshoot problems and errors

3.  To assist in law enforcement purposes and prevent/restrict the
    occurrences of potentially illegal or prohibited activities

### Disclosure of information

We may share information with governmental agencies or other companies
assisting us in fraud prevention or investigation. We may do so when:

1.  Permitted or required by law; or,

2.  Trying to protect against or prevent actual or potential fraud or
    unauthorized transactions; or,

3.  Investigating fraud which has already taken place.

The information is not provided to these companies for marketing
purposes.

### Usage of Cookies

Cookies are small files placed in your computer hard drives. We use it
to analyse our site traffic. We have also used cookies to maintain your
signed in status when you login to our websites.

### Commitment to Data Security

Your personally identifiable information is kept secure. Only authorized
employees, agents and contractors (who have agreed to keep information
secure and confidential) have access to this information. All emails and
newsletters from this site allow you to opt out of further mailings.

### Changes to the Policies

We reserved the rights to amend this Privacy Policy at any time. Upon
posting of new policies, it will take immediate effect. We may notify
you should there be any major changes to the policies.

[^1]: guide: to direct, supervise, or influence usually to a particular
    end. (Merriam-Webster) So expect to spend some time exploring on
    your own.

[^2]: <http://en.wikipedia.org/wiki/Donald_Knuth>

[^4]: These are also known as [Social
    Plugins](https://developers.facebook.com/docs/plugins)

[^6]: Just in case you are not aware, the name "graph" comes from the
    mathematical concept. See
    <http://en.wikipedia.org/wiki/Graph_(mathematics)>.

[^7]: <https://developers.facebook.com/docs/graph-api/using-graph-api/v2.7>
    <span>A special endpoint that translates to the user\_id of the
    owner of the access token</span>

[^8]: Sample code is adapted from the [Facebook
    documentation](https://developers.facebook.com/docs/reference/javascript/FB.ui/)

[^9]: Read
    <http://techcrunch.com/2012/05/15/khan-and-quora-join-open-graph-ranks/>
    and see how some of the apps such as Quora and SocialCam have used
    the Timeline
