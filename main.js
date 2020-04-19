var natural = require('natural')
var classifier = new natural.BayesClassifier()

classifier.addDocument('goverment', 'goverment')
classifier.addDocument(['heathcare', 'patients'], 'heathcare')
classifier.addDocument('city Adminstration', 'city')
classifier.addDocument('university', 'university')
classifier.addDocument('student', 'university')

classifier.train()
var a = classifier.classify('city')
var c = classifier.classify('city goverment patients university  patients')
var b = classifier.classify('students')
console.log(a)
