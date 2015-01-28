---
layout: page
group: core
level: 1
title: Appendix B - sdata.xsd
---

<pre xmlns:jx="http://apache.org/cocoon/templates/jx/1.0" xmlns:ns="http://outerx.org/daisy/1.0">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema id="sdata"
    targetNamespace="http://schemas.sage.com/sdata/2008/1"
    elementFormDefault="qualified"
    xmlns="http://schemas.sage.com/sdata/2008/1"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="1.1.0"&gt;
  &lt;xs:import namespace="http://www.w3.org/2001/XMLSchema" /&gt;

  &lt;!-- Element Definitions --&gt;
  &lt;xs:element name="payload" type="any--type"/&gt;
  &lt;xs:element name="diagnosis" type="diagnosis--type"/&gt;
  &lt;xs:element name="diagnoses" type="diagnoses--type"/&gt;
  &lt;xs:element name="tracking" type="tracking--type"/&gt;
  &lt;xs:element name="schema" type="schema--type"/&gt;
  &lt;!-- Attribute Definitions --&gt;
  &lt;xs:attribute name="key" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;The application's internal key for the resource&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="url" type="xs:anyURI"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;The resource or collection URL&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="uuid" type="uuid--type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;The UUID of the resource&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="lookup" type="xs:anyURI"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;The URL to get a list of resource candidates for a relationship&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="descriptor" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;A short human readable text for the resource&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isDeleted" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Flag to mark deleted entries when updating a list&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="deleteMissing" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Flag to indicate if a list update payload contains the full list (true) or only a delta (false)&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="index" type="xs:integer"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Reserved for future use&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;

  &lt;xs:complexType name="any--type"&gt;
    &lt;xs:sequence&gt;
      &lt;xs:any/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:complexType name="diagnosis--type"&gt;
    &lt;xs:all&gt;
      &lt;xs:element name="severity" type="xs:string"/&gt;
      &lt;xs:element name="sdataCode" type="xs:string"/&gt;
      &lt;xs:element name="applicationCode" type="xs:string"/&gt;
      &lt;xs:element name="message" type="xs:string"/&gt;
      &lt;xs:element name="stackTrace" type="xs:string"/&gt;
      &lt;xs:element name="payloadPath" type="xs:string"/&gt;
    &lt;/xs:all&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:complexType name="diagnoses--type"&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name="diagnosis" type="diagnosis--type" minOccurs="0" maxOccurs="unbounded" /&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:complexType name="tracking--type"&gt;
    &lt;xs:all&gt;
      &lt;xs:element name="phase" type="xs:string"/&gt;
      &lt;xs:element name="phaseDetail" type="xs:string"/&gt;
      &lt;xs:element name="progress" type="xs:decimal"/&gt;
      &lt;xs:element name="elapsedSeconds" type="xs:integer"/&gt;
      &lt;xs:element name="remainingSeconds" type="xs:integer"/&gt;
      &lt;xs:element name="pollingMillis" type="xs:integer"/&gt;
    &lt;/xs:all&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:complexType name="schema--type"&gt;
    &lt;xs:sequence&gt;
      &lt;!-- minOccurs should not be set to 0 
      but for some strange reason Visual Studio seems to ignore the embedded schema
      and gives a validation error if this attribute is not set to 0 --&gt;
      &lt;xs:element ref="xs:schema" minOccurs="0"/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:simpleType name="uuid--type"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:pattern value ="[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
&lt;/xs:schema&gt;</pre>

* * *