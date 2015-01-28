---
layout: page
group: sync
level: 1
title: 2.2 Tick Management
---

In the description of the vector clock algorithm above, the tick is
incremented every time a resource is modified. This is actually not a
requirement and the algorithm works just as well if the tick is incremented when
the modification is detected&nbsp;as part of&nbsp;a synchronization pass rather than at
the time the modification actually happened. So the algorithm does not impose
that we be able to trap modifications in real time.

Even when ticks are only set at the beginning of a synchronization pass,
every entry in a sync feed must receive a different tick value and the tick
values must increase for a given endpoint as we walk a sync feed from beginning
to end. This rule is not really imposed by the vector clock algorithm but it is
imposed by SData Sync because it allows the engine to resume a sync at the point
where it was interrupted rather than at the beginning of the sync feed.

SData uses the convention that the clock tick be incremented "after" being
recorded in the&nbsp;vector clock rather than before being recorded.&nbsp;So the tick
should be interpreted as the “first clock value not yet assigned”, not as the
“last clock&nbsp;value assigned”.

* * *