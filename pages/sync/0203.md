---
layout: page
group: sync
level: 1
title: 2.3 Basic Conflict Resolution
---

The SData algorithm uses a simple mechanism based on priorities and
timestamps to resolve conflicts. The idea is the following:

*   Every node is given a “conflict priority”. Usually, the priorities will be
rather static but SData also supports scenarios where the priorities are
modified dynamically while the system runs. The node with the smallest conflict
priority value wins.

*   If the conflict occurs between nodes of equal priorities, the modification
timestamp of the resource is used to solve the conflict. The node where the
resource was last modified wins.

*   In the very improbable case where the modification timestamps are equal, some
arbitrary rule is applied (smallest node id wins for example).

This can be easily implemented by adding a priority value to the vector clock
pairs. The vector clock becomes a list of triplets (Ni, Ti, Pi) where Ni is the
node id, Ti is Ni's tick when&nbsp;R was last modified at Ni, and Pi is Ni's conflict
priority. Also, the synchronization metadata should contain the last
modification timestamp of each resource.

So, the synchronization metadata for resource&nbsp;R is the combination of its
extended vector clock (list of triplets) and its last modification timestamp.

The conflict resolution algorithm works as described in the following table
(we reduced timestamp to hh:mm to keep table clean):

<table class="content" column-widths=";200">
<colgroup><col>
<col width="200">
<col>
<col>
</colgroup><tbody>

<tr>

<th>

Case

</th>
<th>

Example

</th>
<th>

Winner

</th>
<th>

Description

</th>

</tr>

<tr>

<td valign="top">

Priorities differ (static)

</td>
<td valign="top">

VR1=(N1 6 1)(N2 7 2)(N3 9 3) 10:23

VR2=(N1 5 1)(N2 8 2)(N3 8 3) 10:25

</td>
<td valign="top">

VR1

</td>
<td valign="top">

Conflict involves N1, N2 and N3.&nbsp;

N1 has lowest conflict priority (1) and VR1 is the most recent version for N1

</td>

</tr>

<tr>

<td valign="top">

Priorities differ (dynamic)

</td>
<td valign="top">

VR1=(N1 6 1)(N2 7 2)(N3 9 3) 10:23

VR2=(N1 5 3)(N2 8 2)(N3 8 3) 10:25

</td>
<td valign="top">

VR1

</td>
<td valign="top">

Conflict involves N1, N2 and N3.&nbsp;

The N1 priority changed (from 3 to 1 when tick changed from 5 to 6).&nbsp;

In this case we use the most recent priority for N1.&nbsp;

So N1 has lowest conflict priority (1) and VR1 wins.

</td>

</tr>

<tr>

<td valign="top">

Priorities are equal

</td>
<td valign="top">

VR1=(N1 6 1)(N2 7 1)(N3 9 3) 10:23

VR2=(N1 5 3)(N2 8 1)(N3 8 3) 10:25

</td>
<td valign="top">

VR2

</td>
<td>

Conflict involves N1, N2 and N2. N1 and N3 both have lowest priority (1).&nbsp;

So we use timestamps to resolve the tie. VR2 wins.

Note: the fact that N1's priority is dynamic in the example does not matter,
only the most recent priority is used

</td>

</tr>

</tbody>
</table>

* * *