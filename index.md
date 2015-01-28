---
layout: page
group: home
level: 0
title: SData on GitHub
---

# Welcome ! 

This repository provides technical information on the version 2.0, 1.1 and synchronization of the standard.

SData is a web toolkit, promoting the development of REST-orientated
          services and their consumption. It consists of a small,
          standards-based core (HTTP, ATOM, JSON) and a set of
          optional mechanisms solving common implementation challenges in a
          consistent manner.

The version 2.0 of the standard delivers
          additions aimed towards the needs of web product- and interface
          definitions. The focal points of the new release are:

*   Specification of the JSON format for SData information exchanges
*   Relaxation of several SData restrictions,
            resulting in a smaller, better-defined specification core
*   Compatibility with the SData 1.1 version, ensuring that
            SData 1.1 implementations are automatically version 2.0 compliant
*   Clarification of the role and form of contracts
*   Reorganization of the standard, stressing the freedom of choice
            for development teams and architects


Included in the site are older but still valid specifications:

* Vesion 1.1 of the standard is the basis on which the current version (2.0) is built. The focus is on ATOM+xml and REST as applicable primarily for integrating applications. The specification contained herein maintains its validity in the context of the 2.0 release.  
* SData Sync describes the synchronization protocol underlying compliant applications. 

## Conventions used on the site

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119, "Key words for use in RFCs to Indicate Requirement Levels" [[5](#5)].

* Compliance aspects are displayed in a black box as shown below

<blockquote class="compliance"> Compliance requirements </blockquote>

* Aspects of particular importance are highlighted in an orange box

<blockquote class="warning">Important text </blockquote>

* Notes to the reader are displayed as shown below

<blockquote class="note"> note contents </blockquote>

## <a name="references" href="#references">References</a>

<table>
    <tr>
        <th>Number</th><th>Title</th><th>Version</th><th>Date</th><th>Author</th>
    </tr>
    <tr>
        <td>1</td><td><strong>SData</strong> <i>Welcome to SData</i></td><td>1.1</td><td>2011</td><td>Sage Group plc</td>
    </tr>
    <tr>
        <td>2</td><td><strong>RFC 4627</strong> <i>The application/json Media Type for JavaScript Object Notation (JSON)</i></td><td>Informational</td><td>July 2006</td><td>Internet Engineering Task Force</td>
    </tr>
    <tr>
        <td>3</td><td><strong>RFC 6749</strong> <i>The OAuth 2.0 Authorization Framework</i></td><td>Proposed Standard</td><td>October 2012</td><td>Internet Engineering Task Force</td>
    </tr>
    <tr>
        <td>4</td><td><strong>RFC 6750</strong> <i>The OAuth 2.0 Authorization Framework: Bearer Token Usage</i></td><td>Proposed Standard</td><td>October 2012</td><td>Internet Engineering Task Force</td>
    </tr>
    <tr>
        <td>5</td><td><strong>RFC 2119</strong> <i>Key words for use in RFCs to Indicate Requirement Levels</i></td><td>Best Current Practice</td><td></td><td>Internet Engineering Task Force</td>
    </tr>
<tr>
        <td>6</td><td><strong>RFC 5322</strong>  <i>Internet Message 
Format</i></td><td>Draft Standard</td><td>October 
2008</td><td>Internet Engineering 
Task Force</td>
    </tr>
    <tr>
        <td>7</td><td><strong>ISO 4217</strong>  <i>Codes for the 
representation of currencies and 
funds</i></td><td>-</td><td>2008</td><td>International 
Organization for 
Standardization</td>
    </tr>
    <tr>
        <td>8</td><td><strong>RFC 2616</strong>  <i>Hypertext Transfer 
Protocol -- HTTP/1.1</i></td><td>Standard</td><td>June 1999</td><td>Internet Engineering 
Task Force</td>
    </tr>
    <tr>
        <td>9</td><td><strong>ISO 3166-1</strong>  <i>Codes for the 
representation of names of 
countries and their subdivisions 
- Part 1: Country codes</i></td><td>-</td><td>2006</td><td>International 
Organization for 
Standardization</td>
    </tr>
    <tr>
        <td>10</td><td><strong>ISO 8601</strong> <i>Data elements and 
interchange formats -
Information interchange -
Representation of dates and 
times</i></td><td>Third Edition</td><td>03-Dec-2004</td><td>International 
Organization for 
Standardization</td>
    </tr>
</table>

***

## <a name="references" href="#references">Related work</a>
You may also find these SData-related GitHub repositories of interest:

*   [Argos-SDK](https://github.com/Sage/argos-sdk):
            framework for creating SData-powered mobile applications using
            HTML5, CSS and Javascript
*   [Argos-template](http://argos-template): template
            project for Argos
*   [SDataJavaScriptClientLib](https://github.com/Sage/SDataJavaScriptClientLib):
            JavaScript library aiding the consumption of SData services
*   [SDataCSharpClientLib](https://github.com/Sage/SDataCSharpClientLib):
            C# library aiding the consumption of SData services
*   [SData contracts](https://github.com/Sage/SData-Contracts):
            a library of schema-based contracts supported by some Sage
            applications
*   [Acts-as-SData](https://github.com/Sage/acts_as_sdata):
            a Ruby implementation of the SData protocol
