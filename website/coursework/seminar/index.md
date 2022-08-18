---
title: Assignment 2 - Innovation Seminar
slug: /seminar
---

import assignments from '../assignments';

import formatDate from '../formatDate';

<> {assignments.seminar.show_updating_notice && <div>

:::info

This assignment is currently being updated. Details are tentative and will be finalised soon.

:::

</div>}</>

<table>
  <tbody>
    <tr>
      <td>Issue date</td>
      <td>{formatDate(assignments.seminar.issue)}</td>
    </tr>
    <tr>
      <td>Innovation submission</td>
      <td>{formatDate(assignments.seminar.innovation_submission)}</td>
    </tr>
    <tr>
      <td>Slides submission</td>
      <td>{formatDate(assignments.seminar.slides_submission)}</td>
    </tr>
    <tr>
      <td>Presentation</td>
      <td>{formatDate(assignments.seminar.presentation)}</td>
    </tr>
    <tr>
      <td>Application critiques</td>
      <td>{formatDate(assignments.seminar.application_critiques)}</td>
    </tr>
    <tr>
      <td>Mutual critiques</td>
      <td>{formatDate(assignments.seminar.mutual_critiques)}</td>
    </tr>
  </tbody>
</table>

## General Overview

In order to build good and original applications, it is important to learn what other people have already done — and think critically about what is good and bad, as well as explore ways to improve and generate new ideas. In addition, it is important to learn how to articulate one's ideas clearly and succinctly, both orally and in writing. The innovation seminar is designed to help students:

1. Learn how to identify and assess innovative ideas.
2. Gain a better understanding of existing innovations.
3. Learn how to present (or sell one's ideas).
4. Learn how to articulate their ideas in writing.

There is a French think-tank funded by UNESCO and the French Senate that looks out for digital innovations worldwide called [Netexplo](https://netexplo.com/n100/). You will form groups of up to 4 people, and each team will have to find a new innovation that has not yet been identified in the past by Netexplo.

<p>Before you meet as a group, each member is to try their hand at identifying a recent innovation. Your group is to then meet and discuss to finally decide on the most innovative idea and make a presentation about it to the rest of the class on <strong>{formatDate(assignments.seminar.presentation)}</strong>. Each team is to put up their choice of the most innovative idea on the <a href={assignments.seminar.google_sheet}>Google Sheet</a> as soon as possible (latest by <strong>{formatDate(assignments.seminar.innovation_submission)}</strong>). Note that duplicates are not allowed, and it will be first-come, first-served. Please double check that another group has not taken up your team's choice before adding it to the Google Sheet.</p>

### Nature of Chosen Innovation

Your chosen innovation should be related to computing in some way. It does not have to be restricted to applications or software, as long as it is computing-related.

### Target Audience & Level of Technicality

You can assume the target audience to be your fellow classmates, and the whole goal of this assignment is to for you to convince your classmates that your chosen idea is the coolest! A low level of technicality is allowed in the presentation. That is, you are allowed to use technical terms that you think your classmates will be able to understand, but please don't start going through the steps of Dijkstra's algorithm line-by-line during your presdentation.

## Grading and Admin

The presentations should attempt to cover the following points about the chosen application/innovation:

1. Description of the application
2. Why we should care about the application you chose
3. What is good about the application
4. What are the limitations of the application, and suggestions on how they can be overcome
5. How the application can be implemented if you had to do it (Describe the program organisation by using high-level views like logic flow, identifying technologies used where possible, etc.)
6. New app(s)/business models/ideas arising from studying the application

From our past experience, students tend to ramble on and on in their presentations. To control this, we are using a format called Pecha Kucha. See <http://www.youtube.com/watch?v=9NZOt6BkhUg> for an example. It works like a charm. We will do the same this year.

In particular, each presentation is limited to 20 slides, and each slide should have exactly 20 seconds of air time. This means that each presentation should be approximately 7 minutes long. Please stay within this time limit. You can choose to have a single person present or have more than one, but keep in mind that you have a limited time. The teaching staff WILL cut you off after 7 minutes.

Perhaps it is impossible to cover all the suggested points above in 7 minutes? Well, the point here is to make a thoughtful presentation. You need to work out as a group exactly what to do if you can't fit everything into 7 minutes. Sometimes less is more. Sometimes it's not. Life is full of hard questions.

You can present using PowerPoint, Keynote or whatever tools you wish to use. Surprise us (in a good way) if you can. **BEFORE submitting**, please ensure that your slides auto-advance every 20 seconds. No cheating! 😜

Following the presentation, there will be a short Q&A session opened to the rest of the class for a maximum of 3 minutes.

## Application Critique

After listening to all the presentations, each student will be randomly assigned to write about two of the applications that were presented (but not their own presentation) and have to write about the following:

1. Based on what the presenting team has shared, describe and explain what the application or technology is about. Please don't regurgitate the entire presentation. Summarise the points and keep them unopinionated. (5%)
2. Was the presentation effective? Did the group show that they fully internalised the presentation techniques discussed in Lecture 3 (PUNCH->WIIFY->Plan)? (6%)
3. What are your (original) thoughts? (9%)

The fun part is that the assignment of the presentations each student has to write about will be done only AFTER all the presentations are over. This means that every student will have to pay attention to every presentation 😎. Those who like Russian Roulette are welcome to play and sleep for some presentations.

This is not a literature class, and you are not required to write in poetry. We only ask that you think carefully about what you heard and express your ideas clearly. Points will not be taken off for typos or grammatical errors as long as the ideas are expressed clearly and can be understood easily. There is no minimum length, but do have some mercy on your poor lecturer and try to keep each application critique within what would be 1-2 pages of A4 if it was a typed report. What matters is not how much you write but the quality of your thoughts and ideas and how much you actually learnt from the process.

<p>You are, of course, also welcome to write about other aspects of the seminar and also about lessons learnt in addition to this assignment. The application critiques should be submitted on Coursemology by <strong>{formatDate(assignments.seminar.application_critiques)}</strong> (i.e. the next day).</p>

## Response and Follow-up of Critique

Once all the application critiques are submitted, a new forum will appear, and you will post your critiques there. You will read the critiques written by your coursemates on your presentation and have an online discussion. If your coursemates think that your team's innovation is not innovative, you should try to convince them otherwise.

<p>Just bear in mind that the goal of CS3216 is to learn. You do not do better in this segment of the assignment by being nasty and running your coursemates down. Be civil. Be polite. Be kind. If others post comments disagreeing with you, do not be too defensive. All these comments should be posted by <strong>{formatDate(assignments.seminar.mutual_critiques)}</strong>.</p>

How many comments should you post? As many as you think is appropriate and sufficient to earn the 10% grade for this part of the assignment.

Remember: everything will go well (including your grade) if you demonstrate that you actually learnt something and have approached this application seminar in a thoughtful way 😃.

You will also get points if your friends post stuff on your forum posts. The idea here is that whether you can write stuff that is thoughtful enough to attract readers and people to post comments is also a measure of "quality". A survey will also be conducted to gather feedback from the teams you're critiquing on how valuable your critique is to them.

## Assessment Scheme

The following are the weightages for the two components:

- 50% Group presentation
- 40% Application critique x 2 (what you write in your posts)
- 10% Response and follow-up of critiques (addressing critiques on your chosen innovation and responses to your posts)

Overall, the application seminar is worth 10% of your final grade.

## Mode of Submission

<p>The slides for the presentation should be named <code>{'group-<number>-seminar.{pptx|key}'}</code> and uploaded to Coursemology by <strong>{formatDate(assignments.seminar.slides_submission)}</strong>, because we will be downloading the slides to project on-screen or screen-share during class. The application critiques should be submitted within 24 hours of the innovation seminar, by <strong>{formatDate(assignments.seminar.application_critiques)}</strong>. Your comments for the mutual critique part should be made by <strong>{formatDate(assignments.seminar.mutual_critiques)}</strong>.</p>

**Marks will be deducted if you fail to follow the submission instructions (e.g. incorrect file naming).**

Clarifications and questions related to this assignment should be posted to the Coursemology forum.

The way this assignment is structured, it might seem very stressful — but it's really not quite as bad as it seems. It's actually fun if taken in the right spirit.

Good luck and have fun!
