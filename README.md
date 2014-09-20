filter-blanks-from-array
========================

Function that filters undefined items out from an array.

```
> require("filter-blanks-from-array)(
>   [0, undefined, 'foo', undefined, function () {}, undefined, {}, undefined]
> );
[ 0, 'foo', [Function], {} ]
```
