---
layout: page
group: core
level: 0
title: Versions Summary
---

This pages summarises the contents of the successive SData versions. It is
presented in reverse chronological version (most recent version first).

Minor edits to the wiki are not reflected here. On the other hand, any change
that may break compatiblity is listed in this page. The
<a href="../HistoryOfChanges/" title="History of Changes">History of Changes</a> page gives detailed information
on the pages that have been modified between versions.

## <a name="version11" href="#version11">Version 1.1</a>

<table class="content" print-width="100%" width="100%">
<tbody>

<tr>

<th>

Feature

</th>
<th>

Summary

</th>
<th>

Category

</th>
<th>

Wiki Pages

</th>

</tr>

<tr>

<td>

Update payloads for relationships

</td>
<td>

Clarified the rules for the different relationship types: single child, list
of children, reference, association

Allowed two modes for lists: full list and delta, with
<tt>sdata:deleteMissing</tt> to distinguish between the two (full mode was only
a compat mode in 1.0, it is now back in the standard)

Reserved sdata:index for future use in the XSD (no mention in the wiki)

</td>
<td>

Clarification

</td>
<td><a href="../0902/" title="9.2 Update Payloads">9.2 Update Payloads</a></td>

</tr>

<tr>

<td>

Schema tagging

</td>
<td>

Introduced <tt>sme:tags</tt> attribute to allow contracts to add tags to
schema elements

</td>
<td>

New Feature

</td>
<td><a href="../0408/" title="4.8 Simple Metadata Extensions Summary">4.8 Simple Metadata Extensions Summary</a></td>

</tr>

<tr>

<td>

Schema version

</td>
<td>

Added a standard format for schema versions:
_<tt>major.minor.revision</tt>_, with associated compatibility rules.

</td>
<td>

New Feature

</td>
<td><a href="../0409/" title="4.9 Schema Rules">4.9 Schema Rules</a></td>

</tr>

<tr>

<td valign="top">

Sync tick management

</td>
<td valign="top">

Clarified sync tick management section

</td>
<td valign="top">

Clarification

</td>
<td valign="top">

<a href="../0202/" title="2.2 Tick Management">2.2 Tick Management</a>

</td>

</tr>

<tr>

<td valign="top">

Sync requires complete payloads

</td>
<td valign="top">

Clarified the fact that sync feeds must transport complete payloads

</td>
<td valign="top">

Clarification

</td>
<td valign="top">

<a href="../../sync/0404/" title="4.4 Synchronization Feed">4.4 Synchronization Feed</a>

</td>

</tr>

<tr>

<td valign="top">

Standard conflict priority values for sync

</td>
<td valign="top">

Added a table with standard conflict priority values that endpoints should
use.

</td>
<td valign="top">

New Convention

</td>
<td valign="top">

<a href="../../sync/0402/" title="4.2 Synchronization Digest">4.2 Synchronization Digest</a>

</td>

</tr>

<tr>

<td valign="top">

sme:syncOrder attribute

</td>
<td valign="top">

New schema attribute to indicate order in which resource kinds should be
synched

</td>
<td valign="top">

New Feature

</td>
<td valign="top">

<a href="../../sync/0405/" title="4.5 Synchronization Metadata">4.5 Synchronization Metadata</a>

</td>

</tr>

<tr>

<td valign="top">

Polymorphic relations

</td>
<td valign="top">

Added schema rules for polymorphic relations

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0407/" title="4.7 Polymophic relations">4.7 Polymophic relations</a></td>

</tr>

<tr>

<td valign="top">

Protocol filter variables

</td>
<td valign="top">

Added protocol filter variables like <tt>$uuid</tt> and <tt>$updated</tt> to
query language and <tt>sme:protocolFilters</tt> attribute

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0212/" title="2.12  Query Language">2.12 Query Language</a></td>

</tr>

<tr>

<td valign="top">

Query parameters for named queries

</td>
<td valign="top">

Named queries can take query paramters (<tt>where</tt>, <tt>orderBy</tt>,
<tt>include</tt>, <tt>select</tt>)

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../1202/" title="12.2 Named Query URL">12.2 Named Query URL</a></td>

</tr>

</tbody>
</table>

## <a name="version10" href="#version10">Version 1.0</a>

Released Nov 2, 2009

<table class="content" print-width="100%" width="100%">
<tbody>

<tr>

<th>

Feature

</th>
<th>

Summary

</th>
<th>

Category

</th>
<th>

Wiki Pages

</th>

</tr>

<tr>

<td valign="top">

Case sensitivity rules for URLs

</td>
<td valign="top">

Clarified the rules for case handling in URLs

</td>
<td valign="top">

Clarification

</td>
<td><a href="../0213/" title="2.13 Naming Conventions for URLs">2.13 Naming Conventions for URLs</a></td>

</tr>

<tr>

<td valign="top">

SData Registry

</td>
<td valign="top">

The registry contract is used to register and discover application endpoints

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../1400/" title="14 SData Registry">14 SData Registry</a></td>

</tr>

<tr>

<td valign="top">

select query parameter

</td>
<td valign="top">

New parameter to control the properties returned in SData payloads.

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0211/" title="2.11  Query Parameters">2.11 Query Parameters</a></td>

</tr>

<tr>

<td valign="top">

returnDelta query parameter

</td>
<td valign="top">

New parameter to optimize POST and PUT operations by asking the service to
return the delta instead of the full payload.

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0211/" title="2.11  Query Parameters">2.11 Query Parameters</a></td>

</tr>

<tr>

<td valign="top">

URL extensibility syntax

</td>
<td valign="top">

Convention that applications should use to extend the SData URL syntax

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0215/" title="2.15 Extensibility">2.15 Extensibility</a></td>

</tr>

<tr>

<td valign="top">

Template for service operations

</td>
<td valign="top">

$template can also be used to retrieve default values for input parameters of
service operations.

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../1107/" title="11.7 Operation Template">11.7 Operation Template</a></td>

</tr>

<tr>

<td valign="top">

Named Queries

</td>
<td valign="top">

Variant of service operations, for queries that take complex parameters and
return a feed.

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../1200/" title="12 Named Queries">12 Named Queries</a></td>

</tr>

<tr>

<td valign="top">

sme:mandatory renamed

</td>
<td valign="top">

sme:mandatory has been renamed sme:isMandatory for consistency.

</td>
<td valign="top">**Breaking Change**</td>
<td valign="top"><a href="../0408/" title="4.8 Simple Metadata Extensions Summary">4.8 Simple Metadata Extensions Summary</a></td>

</tr>

<tr>

<td valign="top">

&lt;sdata:schema&gt; element for inlined schemas

</td>
<td valign="top">

Inlined schemas have been moved to an &lt;sdata:schema&gt; element as the
previous solution did not comply with the Atom rules (&lt;link&gt; elements
cannot contain elements)

</td>
<td valign="top">**Breaking Change**</td>
<td valign="top"><a href="../0410/" title="4.10 Inlined Schemas">4.10 Inlined Schemas</a></td>

</tr>

<tr>

<td valign="top">

Schema import and include

</td>
<td valign="top">

Schemas may import or include other schemas.

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0411/" title="4.11 Importing and including schemas">4.11 Importing and including schemas</a></td>

</tr>

<tr>

<td valign="top">

Reliable posting supported on regular POST operations

</td>
<td valign="top">

Previous version did not allow the trackingID parameter to be used directly
on POST operations that create resources. It imposed an additional service
operation.

This limitation has been lifted

</td>
<td valign="top">

Restriction lifted.

</td>
<td valign="top"><a href="../0804/" title="8.4 Reliable Posting">8.4 Reliable Posting</a></td>

</tr>

<tr>

<td valign="top">

Internationalized URLs

</td>
<td valign="top">

Precise rules have been given for non-ASCII characters in URLs

</td>
<td valign="top">

Clarification

</td>
<td valign="top"><a href="../0216/" title="2.16 Internationalized URLs">2.16 Internationalized URLs</a></td>

</tr>

<tr>

<td valign="top">

New mechanism to express relationships between resources

</td>
<td valign="top">

3 new attributes have been introduced to encode links between resources
directly in the payload: sdata:url, sdata:key and sdata:uuid.

This mechanism supersedes the &lt;link&gt; mechanism from the previous version.

sdata:lookup and sdata:descriptor have also been added to support generic
interactive clients.

sme:hasUuid has been introduce to advertise if resource payloads carry an
sdata:uuid attribute or not.

</td>
<td valign="top">**Breaking Change

**</td>
<td valign="top"><a href="../0309/" title="3.9 Resource Linking and Embedding">3.9 Resource Linking and Embedding</a>
</td>

</tr>

<tr>

<td valign="top">

New protocol to update child resources

</td>
<td valign="top">

The protcol to update child resources has been modified. The consumer should
not send the complete list of child resources any more. Instead, it should flag
deleted resources with the sdata:isDeleted flag.

A flag (sdata:deleteMissing) has been introduced to allow providers to support
the old protocol.

</td>
<td valign="top">**Breaking Change**</td>
<td valign="top"><a href="../0902/" title="9.2 Update Payloads">9.2 Partial Updates</a></td>

</tr>

<tr>

<td valign="top">

sme:maxLength

sme:averageLength

sme:totalDigits

sme:fractionDigits

</td>
<td valign="top">

New attributes to advertise type constraints in the schema.

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0408/" title="4.8 Simple Metadata Extensions Summary">4.8 Simple Metadata Extensions Summary</a></td>

</tr>

<tr>

<td valign="top">

Rules for parent/child relationships

</td>
<td valign="top">

More precise rules have been given to differentiate parent/child
relationships from reference and association relationships

</td>
<td valign="top">

Clarification

</td>
<td valign="top"><a href="../0404/" title="4.4 Relationship Definitions">4.4 Relationship Definitions</a></td>

</tr>

<tr>

<td valign="top">

Link &amp; Sync

</td>
<td valign="top">

Complete protocol to link and sync resources

</td>
<td valign="top">

New Feature

</td>
<td valign="top">

<a href="../../sync/0000/" title="SData Linking & Synchronisation">Link &amp; Sync</a>

</td>

</tr>

<tr>

<td valign="top">

Atom conformance

</td>
<td valign="top">

More precise rules to make SData feeds fully conformant with Atom rules

</td>
<td valign="top">

Clarification

</td>
<td valign="top"><a href="../0302/" title="3.2 Feed Elements">3.2 Feed Elements</a></td>

</tr>

<tr>

<td valign="top">

Schema conventions

</td>
<td valign="top">

Added the --enum suffix convention for enum types

</td>
<td valign="top">

New Feature

</td>
<td valign="top"><a href="../0406/" title="4.6 Auxiliary Type Definitions">4.6 Auxiliary Type Definitions</a></td>

</tr>

<tr>

<td valign="top">

MAY/SHOULD/MUST language

Compliance paragraphs

</td>
<td valign="top">

Used MAY, SHOULD and MUST language, as specified in RFC 2119 to make the
specification more precise.

Added compliance paragraphs to clarify what is mandatory and what is optional
for SData compliance.

</td>
<td valign="top">

Clarification

</td>
<td valign="top">

All wiki pages

</td>

</tr>

<tr>

<td valign="top">

Delete concurrency handling

</td>
<td valign="top">

Relaxed the concurrency handling rules for delete operations.

Provider should not return an error if the ETag value is absent.

</td>
<td valign="top">

Relaxed existing rule

</td>
<td valign="top"><a href="../1002/" title="10.2 Delete Concurrency Handling">10.2 Delete Concurrency Handling</a>
</td>

</tr>

<tr>

<td valign="top">

SSO

</td>
<td valign="top">

Added Single Sign On section stating that SData will support the Sage Single
Sign-On protocol. Technical details will be provided later.

</td>
<td valign="top">

Placeholder for upcoming feature

</td>
<td valign="top"><a href="../0503/">5.3 Single Sign-On</a></td>

</tr>

</tbody>
</table>

## <a name="version09" href="#version09">Version 0.9</a>

Released Feb 1st, 2009

* * *