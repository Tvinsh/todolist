var fn = () => {
	console.log( 456 );
};
fn();

class Student {
	hello () {
		console.log("hello");
	}
}

var s = new Student;

class Leo extends Student{
	
}

s.hello();

var l = new Leo;

l.hello();
