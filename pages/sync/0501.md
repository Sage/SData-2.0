---
layout: page
group: sync
level: 1
title: 5.1 Reading Target Digest
---

In a first step, the synchronization engine obtains the synchronization
digest from the target application:

<pre>GET /sdata/myApp2/myContract/-/accounts/$syncDigest HTTP/1.1</pre>

The target application responds with an Atom entry like the following:

<pre>200 OK
Content-Type:&nbsp;application/atom+xml; type=entry

&lt;entry xmlns="http://www.w3.org/2005/Atom"&gt;
&nbsp;&nbsp;&lt;id&gt;http://www.example.com/sdata/myApp2/myContract/-/accounts/$syncDigest&lt;/id&gt;
&nbsp;&nbsp;&lt;title&gt;Synchronization digest&lt;/title&gt;
&nbsp;&nbsp;&lt;updated&gt;2008-03-31T13:46:45Z&lt;/updated&gt;
&nbsp;&nbsp;&lt;link rel="self" type="application/atom+xml; type=entry" title="Refresh" 
        href="http://www.example.com/sdata/myApp2/myContract/-/accounts/$syncDigest" /&gt;
  &lt;payload xmlns="http://schemas.sage.com/sdata/2008/1"&gt;
    &lt;digest xmlns="http://schemas.sage.com/sdata/sync/2008/1"&gt;
      &lt;origin&gt;http://www.example.com/sdata/myApp1/myContract/-/accounts&lt;/origin&gt;
      &lt;digestEntry&gt;
        &lt;endpoint&gt;http://www.example.com/sdata/myApp1/myContract/-/accounts&lt;/endpoint&gt;
        &lt;tick&gt;5&lt;/tick&gt;
        &lt;stamp&gt;2008-10-30T14:52:03.281Z&lt;/stamp&gt;
&nbsp;       &lt;conflictPriority&gt;2&lt;/conflictPriority&gt;
      &lt;/digestEntry&gt;
      &lt;digestEntry&gt;
        &lt;endpoint&gt;http://www.example.com/sdata/myApp2/myContract/-/accounts&lt;/endpoint&gt;
        &lt;tick&gt;11&lt;/tick&gt;
        &lt;stamp&gt;2008-10-30T13:46:45Z&lt;/stamp&gt;
&nbsp;       &lt;conflictPriority&gt;1&lt;/conflictPriority&gt;
      &lt;/digestEntry&gt;
      &lt;digestEntry&gt;
        &lt;endpoint&gt;http://www.example.com/sdata/sageApp3/test/-/accounts&lt;/endpoint&gt;
        &lt;tick&gt;8&lt;/tick&gt;
        &lt;stamp&gt;2008-10-30T12:40:25Z&lt;/stamp&gt;
&nbsp;       &lt;conflictPriority&gt;3&lt;/conflictPriority&gt;
      &lt;/digestEntry&gt;
    &lt;/digest&gt;
  &lt;/payload&gt;
&lt;/entry&gt;</pre>

* * *