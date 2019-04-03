/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.new keyword 
* 2.call, apply, and bind
* 3.obj.func()
* 4.is the function called in the global scope. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
    const MyObject = function () {
        this.name = 'MyObjectName';
        this.myProperty = 'property';
};


// Principle 2
// code example for Implicit Binding

    MyObject.prototype.doSomething = function (action) {
        console.log(this.name + ' is ' + action + '!');
    }

// Principle 3
// code example for New Binding

    const obj = new MyObject();

// Principle 4
// code example for Explicit Binding

    MyObject.call(name, param1, param2);