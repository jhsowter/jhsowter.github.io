---
layout: post
title: "Code before time began: When you can't parse dates in Australia"
tags:
    .NET
    datetime
    programming
    powershell
    C#
---
Recently, I had some trouble with `DateTimeOffset` in C#. I had a [datepicker](https://jqueryui.com/datepicker/) on a screen, and was POSTing a form to a .NET MVC controller with a model which had a `DateTimeOffset` property.  

Now, the default value on the model was `DateTimeOffset.MinValue`, which happens to be `1/01/0001 12:00:00 AM +00:00`. I often check these things in a powershell window.  

~~~
C:\> [DateTimeOffset]::MinValue.ToString()
1/01/0001 12:00:00 AM +00:00
~~~

And so my datepicker was displaying `01/01/0001` as expected. However attempting to post this value to an endpoint, an error would occur due to the string not being a representable datetime. I could also reproduce this in the PS command line. 
~~~
C:\Users\jack> [DateTimeOffset]::Parse("01/01/0001")
Exception calling "Parse" with "1" argument(s): "The UTC representation of the date falls outside the year range 1-9999."
At line:1 char:1
+ [DateTimeOffset]::Parse("01/01/0001")
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [], MethodInvocationException
    + FullyQualifiedErrorId : FormatException
~~~
    
That's strange. Isn't this *exactly* the DateTimeOffset minimum value? 

Next, I checked this. 
~~~
C:\Users\jack> [DateTimeOffset]::Parse("01/01/0001 +0")
DateTime      : 1/01/0001 12:00:00 AM
UtcDateTime   : 1/01/0001 12:00:00 AM
LocalDateTime : 1/01/0001 11:00:00 AM
Date          : 1/01/0001 12:00:00 AM
Day           : 1
DayOfWeek     : Monday
DayOfYear     : 1
Hour          : 0
Millisecond   : 0
Minute        : 0
Month         : 1
Offset        : 00:00:00
Second        : 0
Ticks         : 0
UtcTicks      : 0
TimeOfDay     : 00:00:00
Year          : 1
~~~

Not a problem when I specify the offset to be zero. So what's going on?

I tried a different value in the datepicker - `01/01/1991`. It worked! So I tried:
~~~ 
C:\Users\jack> [DateTimeOffset]::Parse("01/01/1991")
DateTime      : 1/01/1991 12:00:00 AM
UtcDateTime   : 31/12/1990 1:00:00 PM
LocalDateTime : 1/01/1991 12:00:00 AM
Date          : 1/01/1991 12:00:00 AM
Day           : 1
DayOfWeek     : Tuesday
DayOfYear     : 1
Hour          : 0
Millisecond   : 0
Minute        : 0
Month         : 1
Offset        : 11:00:00
Second        : 0
Ticks         : 627982848000000000
UtcTicks      : 627982452000000000
TimeOfDay     : 00:00:00
Year          : 1991
~~~

Well I didn't specify the offset, so the format of the string must be OK for parsing a DateTimeOffset. It's just that for some reason 01/01/0001 doesn't work. 

Then I noticed that the offset for my 1991 test wasn't zero, but 11. So I tried
~~~
C:\Users\jack> [DateTimeOffset]::Parse("01/01/0001 +11")
Exception calling "Parse" with "1" argument(s): "The UTC representation of the date falls outside the year range 1-9999."
At line:1 char:1
+ [DateTimeOffset]::Parse("01/01/0001 +11")
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [], MethodInvocationException
    + FullyQualifiedErrorId : FormatException
~~~

And now it makes sense.  

To represent `01/01/0001 +11` as a UTC date, we have to subtract 11 hours, which would give us a date *less than* `01/01/0001` which is the minimum date. 