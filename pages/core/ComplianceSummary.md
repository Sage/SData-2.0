---
layout: page
group: core
level: 0
title: Compliance Summary
---

The following table summaries the compliance levels for SData providers:

<table class="content" print-width="100%">
<tbody>

<tr>

<th>

<p>Feature</p>

</th>
<th>

<p>Compliance</p>

</th>
<th>

<p>Comments</p>

</th>

</tr>

<tr>

<td valign="top"><a title="2.1  Resource Collection URL" href="../0201/">Collection URL</a></td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>There is a tolerance on the /sdata segment, which applies to all sdata URLs.
<br>
See <a title="2.1  Resource Collection URL" href="../0201/">Collection URL</a> section.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.2  Single Resource URL" href="../0202/">Resource URL</a>
</p>

</td>
<td valign="top">

<p>MUST/SHOULD</p>

</td>
<td>

<p>Selector with resource ID MUST be supported.<br>
Selector with predicate SHOULD be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.3 Resource Property URL" href="../0203/">Property URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.4 Service Operation URL" href="../0204/">Service Operation URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.5 Named Query URL" href="../0205/">Named Query URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.6 Template Resource URL" href="../0206/">Template URL</a>
</p>

</td>
<td valign="top">

<p>MUST/MAY</p>

</td>
<td>

<p>Template URL MUST be supported on resource kind flagged with
<tt>sme:canPost</tt>. <br>
Template URL MAY be supported on service operations and named queries.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.7  Resource Schema URL" href="../0207/">Schema URL</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.8  System and Registry URL" href="../0208/">System URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.9 Intermediate URLs" href="../0209/">Intermediate URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.11  Query Parameters" href="../0211/">Query Parameters</a>
</p>

</td>
<td valign="top">

<p>MUST/SHOULD/MAY</p>

</td>
<td>

<ul>

<li>MUST: <tt>startIndex</tt>, <tt>count</tt>, <tt>where</tt>,
<tt>orderBy</tt>, <tt>include</tt>, <tt>precedence</tt>, <tt>select</tt>.</li>

<li>SHOULD: <tt>format</tt>, <tt>language</tt>.</li>

<li>MAY: <tt>search</tt>, <tt>includeSchema</tt>, <tt>returnDelta</tt>,
<tt>trackingID</tt>, <tt>version</tt>.</li>

</ul>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.12  Query Language" href="../0212/">Query Language</a>
</p>

</td>
<td valign="top">

<p>MUST/MAY</p>

</td>
<td>

<p>Basic level MUST be supported.<br>
Other levels MAY be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.13 Naming Conventions for URLs" href="../0213/">Naming Conventions</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.14 Resource Versioning" href="../0214/">Resource Versioning</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.15 Extensibility" href="../0215/">Extensibility</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="2.16 Internationalized URLs" href="../0216/">Internationalized URLs</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.1 Typical Feed" href="../0301/">Atom feed</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>Compliance for feed elements:</p>


<ul>

<li>MUST: <tt>id</tt>, <tt>title</tt>, <tt>updated</tt>, <tt>link</tt>
(<tt>self</tt>, <tt>schema</tt>).</li>

<li>SHOULD: <tt>author</tt>, <tt>category</tt>.</li>

<li>MAY: <tt>link</tt> (<tt>service</tt>, <tt>queries</tt>), SLE extensions.
</li>

</ul>


<p>Paging links are a MUST if paging is supported.<br>
Post and template links are a MUST if POST is supported.</p>


<p>
<tt>totalResults</tt>, <tt>startIndex </tt>and <tt>itemsPerPage </tt>are a
MUST if indexed paging is supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.7  Typical Feed Entry" href="../0307/">Atom entry</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>Compliance for entry elements:</p>


<ul>

<li>MUST: <tt>id</tt>, <tt>title</tt>, <tt>updated</tt>, <tt>self</tt>
<tt>link</tt>, <tt>schema</tt> <tt><tt>link</tt></tt> (if not inside feed),
<tt>sdata:payload</tt>.</li>

<li>SHOULD: <tt>author</tt> (if not inside a feed), <tt>category</tt>,
<tt>content</tt>.</li>

<li>MAY: <tt>link</tt> (<tt>edit</tt>, <tt>service</tt>, <tt>queries</tt>),
http:etag (MUST if <tt>sme:supportsETag</tt> is true), <tt>http</tt> elements
(MUST for batch).</li>

</ul>


<p>Post and template links are a MUST if POST is supported and entry is not
inside a feed.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.8  Resource Payload" href="../0308/">SData payload</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td>

<p>Compliance for SData attributes:</p>


<ul>

<li>SHOULD: <tt>key</tt>, <tt>url</tt>.</li>

<li>MAY: <tt>uuid</tt> (MUST if sme:hasUuid is true), <tt>lookup</tt>,
<tt>descriptor</tt>, <tt>deleteMissing</tt>.</li>

</ul>


<p>Null values MUST be flagged with <tt>xsi:nil="true"</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.9 Resource Linking and Embedding" href="../0309/">Resource linking and embedding</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.10  Error Payload" href="../0310/">Error payload</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.11 Tracking Payload" href="../0311/">Tracking payload</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>Asynchronous operations MUST use the tracking payload.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="3.14 Localization" href="../0314/">Localized feeds and entries</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.1 Typical SData Schema" href="../0401/">Schema</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top">

<p>Compliance for schema attributes:</p>


<ul>

<li>MUST: <tt>name</tt>, <tt>type</tt>, <tt>sme:role</tt>,
<tt>sme:pluralName</tt>, <tt>sme:relationship</tt> (if <tt>relationship</tt>
property).</li>

</ul>


<ul>

<li>MUST (if true): <tt>nillable</tt>, <tt>sme:canGet/Post/Put/Delete</tt>,
<tt>sme:canPageXxx</tt>, <tt>sme:hasUuid</tt>, <tt>sme:supportsETag</tt>,
<tt>sme:isMandatory</tt>, <tt>sme:isReadOnly</tt>, <tt>sme:isCollection</tt>.
</li>

</ul>


<ul>

<li>SHOULD: <tt>minOccurs</tt>, <tt>sme:label</tt>, <tt>sme:precedence</tt>.
</li>

</ul>


<ul>

<li>SHOULD (if true): <tt>sme:hasTemplate</tt>, <tt>sme:unsupported</tt>,
<tt>sme:canSearch/Sort/Filter,Group</tt>, <tt>sme:isUniqueKey</tt>,
<tt>sme:isLocalized</tt>.</li>

</ul>


<ul>

<li>MAY: <tt>sme:path</tt>, <tt>sme:groupName</tt>, <tt>sme:batchingMode</tt>
(MUST if batching), <tt>sme:invocationMode</tt> (MUST if service operation or
named query), <tt>sme:syncXxx</tt> (MUST if synchronizable)</li>

</ul>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.9 Schema Rules" href="../0409/">Schema Structure</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.5 Service Operation and Named Query Definitions" href="../0405/">Service operation and named query definitions</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST use SData structure if present.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.6 Auxiliary Type Definitions" href="../0406/">Auxiliary type definitions</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.10 Inlined Schemas" href="../0410/">Inlined Schemas</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="4.11 Importing and including schemas" href="../0411/">Imported Schemas</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="5.1 Encryption" href="../0501/">HTTPS Encryption</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="5.2 Authentication" href="../0502/">HTTP Authentication</a>
</p>

</td>
<td valign="top">

<p>SHOULD, unless more secure option</p>

</td>
<td valign="top">

<p>Basic mode SHOULD NOT be used over HTTP connections, only over HTTPS.<br>
Digest mode MAY be used over HTTP</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="5.3 Single Sign-On" href="../0503/">Sage SSO</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top">

<p>When available</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.1 Query Example" href="../0601/">Query</a> / <a title="7.1 Read Example" href="../0701/">Read </a>operation
</p>

</td>
<td valign="top">

<p>MUST (if sme:canGet is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.2 Query Filtering" href="../0602/">Query Filtering</a>
</p>

</td>
<td valign="top">

<p>MUST (with sme:canFilter properties)</p>

</td>
<td valign="top">

<p>Basic query language MUST be supported.<br>
Extended query language MAY be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.3 Query Sorting" href="../0603/">Query Sorting</a>
</p>

</td>
<td valign="top">

<p>MUST (with sme:canSort properties)</p>

</td>
<td valign="top">

<p>Multiple criteria SHOULD be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.4 Query Paging" href="../0604/">Query Paging</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top">

<p>Forwards paging MUST be supported (unless collection is guaranteed to always
be small).<br>
Backwards and indexed paging SHOULD be supported.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>

<a title="6.5 Query Payload Control" href="../0605/">Query</a> / <a title="7.2 Read Payload Control" href="../0702/">Read</a>Payload Control
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.6 Query Caching" href="../0606/">Query</a> / <a title="7.3 Read Caching" href="../0703/">Read</a> Caching
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.8 Query on Property URL" href="../0608/">Query</a> / <a title="7.4 Read on Property URL" href="../0704/">Read</a> on Property URL
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canGet</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.9 Query on Intermediate URL" href="../0609">Query on Intermediate URL</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="6.10 Query Error Handling" href="../0610/">Error Handling</a> (all operations)</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.1 Create Example" href="../0801/">Create operation</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canPost is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.2 Use of $template URL" href="../0802/">Template for create</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canPost is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.3 Create on Property URL" href="../0803/">Create on Property URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canPost</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="8.4 Reliable Posting" href="../0804/">Reliable Posting</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.1 Update Example" href="../0901/">Update operation</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canPut is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.2 Update Payloads" href="../0902/">Partial update</a>
</p>

</td>
<td valign="top">

<p>MUST (on all properties with maxOccurs = 0)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.2 Update Payloads" href="../0902/">Update of child resources</a>
</p>

</td>
<td valign="top">

<p>MUST</p>

</td>
<td valign="top">

<p>Limited to properties marked with <tt>sme:relationship="child"</tt>
</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.2 Update Payloads" href="../0902/">Partial return</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.4 Update on Property URL" href="../0904/">Update on property URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canPut</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="10.1 Delete Example" href="../1001/">Delete operation</a>
</p>

</td>
<td valign="top">

<p>MUST (if sme:canDelete is true)</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="10.2 Delete Concurrency Handling" href="../1002/">Delete Concurrency control with ETag</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST on resource kinds flagged with <tt>sme:supportsETag</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="10.3 Delete on Property URL" href="../1003/">Delete on Property URL</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST when property element is flagged with <tt>sme:canDelete</tt>.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="9.1 Update Example" href="../0901/">X-HTTP-Method-Override</a>
</p>

</td>
<td valign="top">

<p>SHOULD</p>

</td>
<td valign="top"></td>

</tr>

<tr>

<td valign="top">

<p>
<a title="11.1 Overview of Service Operations" href="../1101/">Service Operations</a> and
<a title="12.1 Example of Named Query" href="../1201/">Named Queries</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST follow the SData specifications if used.</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="13 Batch Operations" href="../1300/">Batch Operations</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST follow the SData specifications if used (resource kind marked with
<tt>sme:batchingMode</tt>).</p>

</td>

</tr>

<tr>

<td valign="top">

<p>
<a title="14 SData Registry" href="../1400/">Registry</a>
</p>

</td>
<td valign="top">

<p>MAY</p>

</td>
<td valign="top">

<p>MUST comply with the SData registry contract if supported.</p>

</td>

</tr>

</tbody>
</table>

* * *