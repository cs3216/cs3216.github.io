---
title: Students
slug: /
---

import Link from "@docusaurus/Link"; import students from "./students";

<ul>
  {students.map(batch => <li key={batch.year}><Link to={`/students/${batch.year}`}>Class of {batch.year}</Link></li>)}
</ul>
