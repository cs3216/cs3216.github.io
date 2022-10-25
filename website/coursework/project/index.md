---
title: Final Project
slug: /project
---

import assignments from '../assignments';

import formatDate from '../formatDate';

<table>
  <tbody>
    <tr>
      <td>Issue date</td>
      <td>{formatDate(assignments.project.issue)}</td>
    </tr>
    <tr>
      <td>Team Formation Deadline</td>
      <td>{formatDate(assignments.project.team_formation)}</td>
    </tr>
    <tr>
      <td>Proposal Due</td>
      <td>{formatDate(assignments.project.proposal_submission)}</td>
    </tr>
    <tr>
      <td>Progress Report 1</td>
      <td>{formatDate(assignments.project.progress_report_1_submission)}</td>
    </tr>
    <tr>
      <td>Progress Report 2</td>
      <td>{formatDate(assignments.project.progress_report_2_submission)}</td>
    </tr>
    <tr>
      <td>In-Class Progress Report</td>
      <td>{formatDate(assignments.project.in_class_progress_report)}</td>
    </tr>
    <tr>
      <td>Poster Session</td>
      <td>{formatDate(assignments.project.poster_session)} {assignments.project.is_poster_session_date_tentative && <span>(TBC)</span>}</td>
    </tr>
    <tr>
      <td>Final Report</td>
      <td>{formatDate(assignments.project.final_report_submission)}</td>
    </tr>
  </tbody>
</table>

## General Overview

Since you have all survived the first half a semester of CS3216, you are now an expert in both product design and Progressive Web App development. The Final Project is where you will showcase to the world (and the CS3216 teaching staff, since the Final Project is what will mostly determine your final grade) your creativity and talents.

<p>For the Final Project, you will work in teams of three or four (fewer is also allowed) to develop and deploy an application (mobile, web or otherwise) of your choice. You are allowed to team up with anybody you want (and mutually willing to work with you). You may also work with external parties. Please update your groupings on the <a href={assignments.project.google_sheet}>Student Grouping Google Sheet</a> by <strong>{formatDate(assignments.project.team_formation)}</strong>. Each team is to submit a project proposal by <strong>{formatDate(assignments.project.proposal_submission)}</strong> (Monday immediately after Recess Week) and the teams are expected to work on the Final Projects during the second half of the semester.</p>

Your team can design the whole application, but if the scope is too large to be completed in one semester and you intend to continue to develop your application for a business venture, you can implement a prototype with some basic (or limited) functionality to satisfy the requirements for the class. Please state such intentions clearly in your proposals. The teaching staff will evaluate your proposals carefully and provide you with our feedback within a week.

There are no limits on what students can do for the final problem, though the expectation is that it must be a "cool" application or product. The following are possibilities:

- A real-time HTML5 game
- A FB Messenger / Telegram bot
- A new e-commerce application. This can be the basis for a submission to the Start-Up@Singapore contest
- A mobile application. You may choose to build a native app if you like
- An entry for the Microsoft Imagine Cup
- Some amusement – cute and useless, but _fun_ and popular
- An e-learning application of sorts
- An Internet of Things hack
- An application to improve school life, something along the lines of NUSMods / NUSWhispers?

The possibilities are endless. If you plan to develop a social networking application, you are expected to deploy your Final Project at least two to three weeks before the end of the semester because the "proof of the pudding is in the eating". You should get _real_ people to use your applications, and the popularity of your application can be (but is not the only) criteria for the evaluation.

If one of the apps you developed for one of the previous assignments turned out to be to very popular (i.e. has lots of users or a high growth rate) or has perceived potential, you may also choose to further develop it as your Final Project. The only minor complication is that you might be "locked-in" to work with the same team members. We leave you to sort such things out by yourself.

## Course Policy on Final Project Groupings

People can be in two Final Project groups. This often happens when someone from an assignment group gets distracted and want to try something new but cannot really bear to "leave their baby" and still want to be a part of that group. Fair enough.

However, your Final Project grade will come from _ONE_ project that you will specify/declare right at the onset, i.e. by the end of the mid-term break. The rationale for this policy is that we don't want people to jump ship halfway and leave others high and dry. With this policy, everyone knows everyone's priorities. The "extra" members don't count towards the 4-member limit for a project team.

If you decide to work with external parties, we do not have any official guide on what compensation you should negotiate. We leave it to you to decide for yourselves what is fair. However, DO NOT work for companies that clearly neither value nor respect you.

## Final Project Proposal

<p>Your team should submit a project proposal by <strong>{formatDate(assignments.project.proposal_submission)}</strong>. The proposal should be about 4 to 5 pages (maximum of 6) in length and address (at least) the following points: </p>

1. Description of the application you plan to develop.
2. Justification for choosing this project idea. Briefly mention the 3 key points: "Problem is real? Problem can be solved in CS3216? Problem has impact?"
3. Project schedule: milestones and timeline, including an implementation plan and deployment plan.
4. Individual contribution and roles. Contributions and/or support from external partners, if any.
5. Long-term plan and business model (if applicable).
6. Marketing and strategies to be employed.
7. High-level design (e.g. modules, application logic flow, which technologies, i.e. HTML5, Native, Web Sockets to be used).

## Development of Final Project

Each team will meet with the teaching staff (probably lecturer + TA) for a one-hour preliminary meeting after receiving your feedback on your Final Project proposal. The meetings will be biweekly. Look out in your emails for the meeting schedules.

These are compulsory sessions where the schedule is flexible and should be determined by both parties.

## Customer Contact Reports

We have told you time and again to "go out there and talk to your customers", and we're serious. 10% of your project grade will come from your "Customer Contact Reports". Use any reasonable report format to record your customer contact details and the interactions with your potential users. You are expected to produce a contact report at every consultation session.

## Progress Reports

<p>Each team will be required to submit a progress report on <strong>{formatDate(assignments.project.progress_report_1_submission)}</strong>. The progress report should include <strong>minimally</strong> the following:</p>

1. Application prototype. Minimally as functional as what was achieved in Assignment 3.
2. Is your project on schedule according to the milestones and timelines submitted in the initial project proposal? If you are on schedule, great! If not, why not? What is your team doing about the slip in your project schedule?
3. What were the problems/difficulties your team has encountered? How have you overcome them, or what plans do you have to overcome them?
4. Any changes to the application since the initial project proposal?
5. Assuming that your team has already deployed a prototype of your application, how has the response been? Any other new insights, plans or strategies your team has come out with?
6. Updated project schedule: milestones and timeline.

<p>A second progress report will be due on <strong>{formatDate(assignments.project.progress_report_2_submission)}</strong>. The contents of which would be similar to the first progress report.</p>

Please try to keep your reports to within two pages, or a maximum of 3 pages if you really must.

## Final Project Presentation

<p>On <strong>{formatDate(assignments.project.in_class_progress_report)}</strong>, each team will make a presentation to the rest of the class on your project. This session will be another round of peer-appraisal by your peers. Your goal is to convince your fellow coursemates that your project is really cool, and that you have done a lot of work and great work. Think of it as round 2 of your innovation seminar, but you are selling your own dog food.</p>

## Preliminary Security Scanning

<p>At this juncture (<strong>{formatDate(assignments.project.in_class_progress_report)}</strong>), you should have a preliminary website for your app up and running, even if it is not fully functional. You are expected to provide us with a URL, and the tutors will be using security tools to scan your site. You will be provided with a security report, and you are expected to address the cited issues for your final project. Clearly, if your project is very incomplete, very little will be found, but you then risk more bad things being found after your final project is submitted. We will be doing another round of security scanning after your final project is submitted.</p>

## SoC STePs

<p>In the last week of class, we will be holding a 4-hour poster session in the SoC student foyer on <strong>{formatDate(assignments.project.poster_session)} {assignments.project.is_poster_session_date_tentative && <span>(TBC)</span>}</strong> from 3pm to 7pm as part of the School of Computing Term Projects Showcase (STePS).</p>

Each team is to prepare an A1-sized poster. The judges and other members of the SoC and NUS will turn up for the "show-and-tell". You should treat this session as a trade show to sell your projects as you will get a large percentage of your grading from "other people" - NUS staff, students, alumni, guests - who turn up at your booth. So your final grade depends very much on your show-and-tell in this session. Be creative. Collaterals are encouraged but note that these will be on your own expenses.

Again, you can choose how you want to present your work. You can bring along other materials in addition to the posters, such as your iPads, or set up your laptops to do a demo also. We'll leave it up to you!

### Final Project Video

Traditionally, every team is required to make a 1-minute video to be submitted to the STePS organising committee. Here's a playlist of past years' videos.

<iframe width="100%" height="416" src="https://www.youtube.com/embed/videoseries?list=PLLYjqEF13ESyh-Rpm_-XtJzOqm5MeEnrj" frameBorder="0" allowFullScreen />

### Marketing Efforts

As part of the user acquisition process, many teams set up their own social media page to publicise their products and gain initial traction before the actual STePS event. Here's what the top three teams of AY2015/16 did on Facebook:

- **Letterbox** went around the school on a hoverboard and handed out flyers. They also managed to launch their apps to the iOS App Store and Google Play Store before the event (a seriously impressive feat).
- **Griddit** created an anonymous chatroom for NUSWhispers and organised an [AMA with Prof Ben Leong](http://blog.griddit.io/post/133470245990/professor-ben-leongs-ask-me-anything), which saw over 400 participants.
- **Paperbaton** launched a [blog with helpful tips](https://paperbaton.com/blog/) and also a complementing product, [NUSExam](https://paperbaton.com/blog/introducing-nusexam/), a Past-Year Question Paper Downloader for NUS Students.

These three teams also created Facebook pages to engage users continually. Have a look at the Facebook pages of [Letterbox](https://www.facebook.com/getletterbox), [Griddit](https://www.facebook.com/griddit) and [Paperbaton](https://www.facebook.com/paperbaton) to get a sense of what sort of pre-STePS publicity can be done.

![Paperbaton Team](/img/class-photos/paperbaton.jpg)

### Final Project Poster

The final A1-sized project poster should (at least) include the following points:

1. Description of the application you have developed.
2. What makes your application special?
3. Screenshots, graphics, diagrams and tables. Probably fewer words.
4. Prepare a snappy yet catchy 1-2 minute pitch that you can use (over and over) when presenting your poster.

Remember, avoid overloading the poster with too much (small) text. This will ensure that people won't want to read what's on your poster. Add in pictures, graphics, diagrams and tables when appropriate. You are there to "sell" people your idea, to make them convinced that your application is unique and creative, and NOT to put them to sleep.

Some examples of past STePS posters:

<div className="text--center">
  <a target="_blank" href="/img/posters/letterbox.pdf"><img alt="Letterbox Poster" src="/img/posters/letterbox-thumbnail.png"/></a>
  <a target="_blank" href="/img/posters/paperbaton.pdf"><img alt="Paperbaton Poster" src="/img/posters/paperbaton-thumbnail.png"/></a>
  <a target="_blank" href="/img/posters/una.pdf"><img alt="Una Poster" src="/img/posters/una-thumbnail.png"/></a>
</div>

## Final Project Report

<p>Like most other classes, the Final Project report is due on <strong>{formatDate(assignments.project.final_report_submission)}</strong> (to be uploaded to Coursemology by 23:59, please). The final report should (at least) include the following points:</p>

1. Description of the application you have developed.
2. Are there any existing applications out there that are similar? What makes your application special?
3. Review of milestones and timeline for the project (which ones did you hit, what ones did you miss?).
4. Individual contribution and roles. Acknowledgement of resources/help provided by external parties.
5. Application design (e.g. database schema, UML, etc., but no code please).
6. Report on the current number of users who have installed, active users, etc. Perhaps Google Analytics data and screenshots (or similar analytics tools) to support your claims.
7. Future plans and strategies.
8. Insights gained from the project. What did you learn from doing the Final Project?

We do not specify a required page length, though we expect that most reports will be about 10 to 15 pages in length. The report definitely SHOULD NOT exceed 20 pages, please. Once you submit the Final Project report, you are done with CS3216! Congratulations!

## Assessment Scheme

The Final Project is worth 40% of the total grade for CS3216. The Final Project will be graded according to the following weightage:

- 5% Project Proposal
- 10% Customer Contact Report
- 5% Progress Report
- 10% Progress Report 2
- 10% In-class Final Project presentation (awarded by your peers)
- 30% Poster Presentation (awarded by the panel of judges)
- 30% Final Report

The fact that 30% of the grade for the Final Project is determined by the outcome of your poster presentation might make it seem somewhat random and arbitrary, but this mimics life. Success comes not only from how well you do something but from how well you can sell it (or convince suckers to buy your stuff even if it's completely useless and they don't actually need it 😜). This is also where the marketing people make themselves useful. You are graded on the quality and relevance of your posters, your sales pitch, marketing collaterals, the quality of your apps, etc.

For those of you doing external projects, your team is treated as a consultancy. You are graded by how well you manage your consultancy, e.g., frequency of meetings with your clients, quality of questions asked, quality of solutions proposed, and how you negotiate your compensation package. For those doing your own project, you are treated as a startup. We assess you on how well you manage your market validation, how well you design your marketing campaign, how you go out and bring in users, etc.

## Mode of Submission

The following is the list of deliverables to be pushed to your GitHub repository:

1. Source code.
2. You should also upload a copy of your poster to your repository.
3. Proof of working application: You may either (a) Publish the application publicly (in the application settings, untick the Developer Mode); or (b) Add all the members of the teaching staff to the Developers part in the application settings so that we can assess your application (of course you need to add us as your friends first). In both cases, you should provide us with a link to your application's canvas page.
4. Your Final Project report, in PDF format.

Push all of the above to your GitHub repository. **Not following the submission instructions (e.g. incorrect file naming) will result in the deduction of marks.**

Clarifications and questions related to this assignment should be posted on the Coursemology Forum.

Good luck, have fun. Live long and prosper!
