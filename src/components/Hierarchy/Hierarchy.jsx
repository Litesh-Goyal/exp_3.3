import React from 'react';
import './Hierarchy.css';

// --- CLASS HIERARCHY (The Core Experiment) ---

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Student inherits from Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Calls the Person constructor
    this.major = major;
  }
  greet() {
    return `${super.greet()} and I'm studying ${this.major}.`;
  }
}

// Teacher inherits from Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // Calls the Person constructor
    this.subject = subject;
  }
  greet() {
    return `${super.greet()} and I teach ${this.subject}.`;
  }
}

// --- REACT COMPONENT ---

function Hierarchy() {
  // Creating instances of our classes
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  return (
    <div className="hierarchy-container">
      <h1>Person Class Hierarchy</h1>
      <div className="card-list">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <h3>
              {person.name} 
              <span>({person.constructor.name})</span>
            </h3>
            <p className="age">Age: {person.age}</p>
            <p className="greet"><em>{person.greet()}</em></p>
            
            {/* Displaying specific properties if they exist */}
            {person.major && <p className="extra">Major: {person.major}</p>}
            {person.subject && <p className="extra">Teaching: {person.subject}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hierarchy;