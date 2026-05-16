import { LevelData } from '../models';

const HARD_CODED: LevelData[] = [
  {
    levelNumber: 1, difficultyRating: 'Beginner',
    questions: [
      { id: 1, questionText: 'What is the entry point of a Java application?', optionA: 'main() function', optionB: 'public static void main(String[] args)', optionC: 'public void main()', optionD: 'static void main()', correctOption: 'b', explanation: 'The JVM looks for a specific method signature "public static void main(String[] args)" to start the application.' },
      { id: 2, questionText: 'Which of the following is NOT a valid Java comment?', optionA: '// comment', optionB: '/* comment */', optionC: '<!-- comment -->', optionD: '/** comment */', correctOption: 'c', explanation: 'HTML-style comments "<!-- -->" are not valid in Java. Java uses //, /* */, and /** */.' },
      { id: 3, questionText: 'What does "System.out.println()" do?', optionA: 'Reads input', optionB: 'Prints and moves to new line', optionC: 'Prints on same line', optionD: 'Clears the console', correctOption: 'b', explanation: 'The "println" method prints the given content and then appends a newline character.' },
      { id: 4, questionText: 'Which data type stores a single character?', optionA: 'String', optionB: 'char', optionC: 'Character', optionD: 'varchar', correctOption: 'b', explanation: 'The "char" data type is used to store a single 16-bit Unicode character.' },
      { id: 5, questionText: 'What is the size of an int in Java?', optionA: '16 bits', optionB: '32 bits', optionC: '64 bits', optionD: '8 bits', correctOption: 'b', explanation: 'In Java, an "int" is a 32-bit signed two\'s complement integer.' },
      { id: 6, questionText: 'Which keyword is used to create a constant variable?', optionA: 'const', optionB: 'static', optionC: 'final', optionD: 'constant', correctOption: 'c', explanation: 'The "final" keyword prevents a variable from being reassigned after its initial value is set.' },
      { id: 7, questionText: 'Java is a ___ programming language.', optionA: 'compiled', optionB: 'interpreted', optionC: 'compiled and interpreted', optionD: 'scripting', correctOption: 'c', explanation: 'Java source code is compiled into bytecode, which is then interpreted (and JIT-compiled) by the JVM.' },
      { id: 8, questionText: 'Which of these is a valid variable name in Java?', optionA: '2value', optionB: '_value', optionC: 'my-var', optionD: 'class', correctOption: 'b', explanation: 'Variable names cannot start with numbers, contain hyphens, or be reserved keywords. Underscores are allowed.' },
      { id: 9, questionText: 'What is the default value of a boolean variable in Java?', optionA: 'true', optionB: 'false', optionC: '0', optionD: 'null', correctOption: 'b', explanation: 'Uninitialized boolean instance variables default to "false".' },
      { id: 10, questionText: 'Which operator is used for integer division?', optionA: '/', optionB: '%', optionC: '//', optionD: '\\', correctOption: 'a', explanation: 'The "/" operator performs integer division when both operands are integers, discarding the remainder.' },
    ]
  },
  {
    levelNumber: 2, difficultyRating: 'Beginner',
    questions: [
      { id: 11, questionText: 'What is implicit type conversion called?', optionA: 'Casting', optionB: 'Widening', optionC: 'Narrowing', optionD: 'Parsing', correctOption: 'b', explanation: 'Widening conversion happens automatically when a smaller data type is assigned to a larger one (e.g., int to double).' },
      { id: 12, questionText: 'What is the range of the byte data type?', optionA: '-128 to 127', optionB: '0 to 255', optionC: '-32768 to 32767', optionD: '-256 to 255', correctOption: 'a', explanation: 'A "byte" is an 8-bit signed integer, so its range is -2^7 to 2^7-1.' },
      { id: 13, questionText: 'Which of the following is a wrapper class?', optionA: 'int', optionB: 'Integer', optionC: 'boolean', optionD: 'char', correctOption: 'b', explanation: 'Wrapper classes like "Integer" allow primitive types to be treated as objects.' },
      { id: 14, questionText: 'What does "double" store compared to "float"?', optionA: 'Less precision', optionB: 'More precision', optionC: 'Same precision', optionD: 'Only integers', correctOption: 'b', explanation: 'A "double" uses 64 bits while a "float" uses 32 bits, offering more precision and range.' },
      { id: 15, questionText: 'What happens when you cast a double to an int?', optionA: 'Rounded to nearest', optionB: 'Decimal part truncated', optionC: 'Throws exception', optionD: 'Compilation error', correctOption: 'b', explanation: 'Narrowing casting from double to int simply drops the decimal part without rounding.' },
      { id: 16, questionText: 'Which is NOT a primitive data type?', optionA: 'int', optionB: 'String', optionC: 'boolean', optionD: 'char', correctOption: 'b', explanation: 'String is a class in Java (java.lang.String), not a primitive type.' },
      { id: 17, questionText: 'What is autoboxing in Java?', optionA: 'Converting primitive to wrapper', optionB: 'Converting wrapper to primitive', optionC: 'Creating a new object', optionD: 'Sorting an array', correctOption: 'a', explanation: 'Autoboxing is the automatic conversion the Java compiler makes between primitives and their corresponding wrapper classes.' },
      { id: 18, questionText: 'What does "var" keyword do in Java 10+?', optionA: 'Creates a variable', optionB: 'Type inference for local variables', optionC: 'Declares a constant', optionD: 'Creates a global variable', correctOption: 'b', explanation: 'The "var" keyword allows the compiler to infer the type of a local variable based on its initializer.' },
      { id: 19, questionText: 'Which is true about the "long" data type?', optionA: '32-bit signed', optionB: '64-bit signed', optionC: '128-bit signed', optionD: '64-bit unsigned', correctOption: 'b', explanation: 'The "long" data type is a 64-bit two\'s complement integer.' },
      { id: 20, questionText: 'What is the result of "int x = (int) 3.9;"?', optionA: '4', optionB: '3', optionC: '3.9', optionD: 'Compilation error', correctOption: 'b', explanation: 'Casting to int truncates the decimal part, resulting in 3.' },
    ]
  },
  {
    levelNumber: 3, difficultyRating: 'Beginner',
    questions: [
      { id: 21, questionText: 'What does the "%" operator do?', optionA: 'Percentage', optionB: 'Modulus (remainder)', optionC: 'Division', optionD: 'Bitwise AND', correctOption: 'b', explanation: 'The modulus operator returns the remainder of a division between two numbers.' },
      { id: 22, questionText: 'What is the result of "5 + 3 * 2"?', optionA: '16', optionB: '11', optionC: '13', optionD: '10', correctOption: 'b', explanation: 'Operator precedence rules (PEMDAS) dictate that multiplication happens before addition: 5 + (3 * 2) = 11.' },
      { id: 23, questionText: 'Which operator checks both conditions and short-circuits?', optionA: '&', optionB: '|', optionC: '&&', optionD: '^', correctOption: 'c', explanation: 'The "&&" (logical AND) short-circuits: if the first operand is false, the second is not evaluated.' },
      { id: 24, questionText: 'What does "++x" do?', optionA: 'Increments then returns', optionB: 'Returns then increments', optionC: 'Adds 2 to x', optionD: 'Decrements x', correctOption: 'a', explanation: 'This is the pre-increment operator. It adds 1 to x and then returns the new value.' },
      { id: 25, questionText: 'Which statement is used for multi-way branching?', optionA: 'if', optionB: 'while', optionC: 'switch', optionD: 'for', correctOption: 'c', explanation: 'The switch statement allows a variable to be tested for equality against a list of values.' },
      { id: 26, questionText: 'What is the ternary operator in Java?', optionA: '?:', optionB: '??', optionC: '?', optionD: '::', correctOption: 'a', explanation: 'The ternary operator (condition ? exprIfTrue : exprIfFalse) is a shorthand for an if-else statement.' },
      { id: 27, questionText: 'What is the result of "!true && false"?', optionA: 'true', optionB: 'false', optionC: 'Compilation error', optionD: 'null', correctOption: 'b', explanation: '!true is false. false && false is false.' },
      { id: 28, questionText: 'Which loop guarantees at least one execution?', optionA: 'for', optionB: 'while', optionC: 'do-while', optionD: 'foreach', correctOption: 'c', explanation: 'In a do-while loop, the condition is checked AFTER the body executes, ensuring at least one run.' },
      { id: 29, questionText: 'What is the output of "break" inside a loop?', optionA: 'Skips current iteration', optionB: 'Exits the loop immediately', optionC: 'Restarts the loop', optionD: 'Throws an exception', correctOption: 'b', explanation: 'The break statement terminates the innermost loop or switch statement immediately.' },
      { id: 30, questionText: 'What does "continue" do in a loop?', optionA: 'Exits the loop', optionB: 'Skips rest of current iteration', optionC: 'Restarts the loop', optionD: 'Pauses the loop', correctOption: 'b', explanation: 'The continue statement skips the remaining code in the current iteration and moves to the next one.' },
    ]
  },
  {
    levelNumber: 4, difficultyRating: 'Beginner',
    questions: [
      { id: 31, questionText: 'How do you declare an array of 10 integers?', optionA: 'int arr[10];', optionB: 'int[] arr = new int[10];', optionC: 'int arr = new int[10];', optionD: 'array<int> arr = new;', correctOption: 'b', explanation: 'Arrays are objects in Java. You declare the type with [], then allocate memory with "new".' },
      { id: 32, questionText: 'What is the index of the first element in an array?', optionA: '1', optionB: '0', optionC: '-1', optionD: 'null', correctOption: 'b', explanation: 'Java arrays are zero-indexed, meaning the first element is at index 0.' },
      { id: 33, questionText: 'What is "ArrayIndexOutOfBoundsException"?', optionA: 'Array is full', optionB: 'Accessing invalid index', optionC: 'Array is empty', optionD: 'Array type mismatch', correctOption: 'b', explanation: 'This exception is thrown when you try to access an index that is less than 0 or greater than or equal to the array length.' },
      { id: 34, questionText: 'What does "arr.length" return?', optionA: 'Number of elements', optionB: 'Last index', optionC: 'Memory size', optionD: 'First index', correctOption: 'a', explanation: 'The "length" field of an array returns the total number of elements it can hold.' },
      { id: 35, questionText: 'How do you create a 2D array with 3 rows, 4 columns?', optionA: 'int[3][4] arr;', optionB: 'int[][] arr = new int[3][4];', optionC: 'int arr[3][4];', optionD: 'int[3x4] arr;', correctOption: 'b', explanation: '2D arrays are arrays of arrays. You specify the size of each dimension in separate brackets.' },
      { id: 36, questionText: 'What is an anonymous array?', optionA: 'Array without name', optionB: 'Array of null values', optionC: 'Empty array', optionD: 'Array with no type', correctOption: 'a', explanation: 'An anonymous array is created and initialized at the same time without assigning it to a variable name (e.g., new int[]{1, 2, 3}).' },
      { id: 37, questionText: 'Which package contains "Arrays" utility class?', optionA: 'java.util', optionB: 'java.lang', optionC: 'java.io', optionD: 'java.array', correctOption: 'a', explanation: 'The java.util.Arrays class contains static methods for sorting, searching, and comparing arrays.' },
      { id: 38, questionText: 'How do you copy an array in Java?', optionA: 'arr.copy()', optionB: 'Arrays.copyOf()', optionC: 'arr.clone()', optionD: 'Both b and c', correctOption: 'd', explanation: 'Both Arrays.copyOf() and the clone() method can be used to create a copy of an array.' },
      { id: 39, questionText: 'What is "ArrayStoreException"?', optionA: 'Array is full', optionB: 'Assigning wrong type to array element', optionC: 'Array is empty', optionD: 'Deleting from array', correctOption: 'b', explanation: 'This exception is thrown if you try to store an object of a different type than the array was declared to hold.' },
      { id: 40, questionText: 'What is a jagged array?', optionA: 'Array with null values', optionB: '2D array with varying column lengths', optionC: 'Sorted array', optionD: 'Array of arrays', correctOption: 'b', explanation: 'A jagged array is an array of arrays where each inner array can have a different length.' },
    ]
  },
  {
    levelNumber: 5, difficultyRating: 'Beginner',
    questions: [
      { id: 41, questionText: 'Is String a primitive or object in Java?', optionA: 'Primitive', optionB: 'Object', optionC: 'Both', optionD: 'Neither', correctOption: 'b', explanation: 'Strings are instances of the java.lang.String class, making them objects.' },
      { id: 42, questionText: 'How do you compare two Strings for equality?', optionA: '==', optionB: 'equals()', optionC: 'compare()', optionD: 'match()', correctOption: 'b', explanation: 'The "==" operator compares memory addresses, while the "equals()" method compares the actual character content.' },
      { id: 43, questionText: 'What is the String literal pool?', optionA: 'Heap memory for Strings', optionB: 'Special memory area for literal Strings', optionC: 'Garbage collection area', optionD: 'Stack memory for Strings', correctOption: 'b', explanation: 'The String pool is a special memory region in the heap that stores unique string literals to save space.' },
      { id: 44, questionText: 'What does "substring(1, 4)" return for "Hello"?', optionA: 'Hel', optionB: 'ell', optionC: 'ello', optionD: 'Hell', correctOption: 'b', explanation: 'The substring(start, end) method returns characters from "start" (inclusive) to "end" (exclusive). Index 1 to 3 of "Hello" is "ell".' },
      { id: 45, questionText: 'Is String mutable or immutable?', optionA: 'Mutable', optionB: 'Immutable', optionC: 'Partially mutable', optionD: 'Depends on version', correctOption: 'b', explanation: 'Strings are immutable, meaning once created, their value cannot be changed. Operations like concatenation create new String objects.' },
      { id: 46, questionText: 'Which class is a mutable version of String?', optionA: 'StringBuffer and StringBuilder', optionB: 'CharSequence', optionC: 'StringToken', optionD: 'StringUtils', correctOption: 'a', explanation: 'StringBuilder (non-thread-safe) and StringBuffer (thread-safe) allow for efficient modification of character sequences.' },
      { id: 47, questionText: 'What does "concat()" do?', optionA: 'Compares strings', optionB: 'Concatenates two strings', optionC: 'Splits a string', optionD: 'Reverses a string', correctOption: 'b', explanation: 'The concat() method appends one string to the end of another.' },
      { id: 48, questionText: 'What is the output of "Java".charAt(1)?', optionA: 'J', optionB: 'a', optionC: 'v', optionD: 'IndexOutOfBounds', correctOption: 'b', explanation: 'The charAt(index) method returns the character at the specified index. Index 1 of "Java" is "a".' },
      { id: 49, questionText: 'How do you convert a String to an int?', optionA: '(int) str', optionB: 'Integer.parseInt(str)', optionC: 'str.toInt()', optionD: 'int.valueOf(str)', correctOption: 'b', explanation: 'Integer.parseInt() is the standard way to parse a numeric string into a primitive int.' },
      { id: 50, questionText: 'What does "trim()" do?', optionA: 'Removes all spaces', optionB: 'Removes leading and trailing whitespace', optionC: 'Truncates the string', optionD: 'Converts to lowercase', correctOption: 'b', explanation: 'The trim() method removes whitespace characters from both ends of a string.' },
    ]
  },
];

function generateQuestionsForLevel(levelNum: number): LevelData {
  const idStart = (levelNum - 1) * 10 + 1;
  const templates: Record<string, Array<{ q: string; a: string; b: string; c: string; d: string; correct: string; exp: string }>> = {
    Beginner: [
      { q: `What is the correct way to declare a variable in Java?`, a: 'variable name = value;', b: 'type name = value;', c: 'name = value;', d: 'var name := value;', correct: 'b', exp: 'In Java, you must specify the type (or use "var" for inference) followed by the name and assignment.' },
      { q: `Which of these is a reserved keyword in Java?`, a: 'typeof', b: 'instanceof', c: 'let', d: 'define', correct: 'b', exp: '"instanceof" is used to check if an object is an instance of a specific class or interface.' },
      { q: `What is the purpose of the "package" statement?`, a: 'Import libraries', b: 'Group related classes', c: 'Declare variables', d: 'Define methods', correct: 'b', exp: 'Packages are used in Java to prevent naming conflicts and to control access to classes.' },
      { q: `Which access modifier allows access from anywhere?`, a: 'private', b: 'protected', c: 'public', d: 'default', correct: 'c', exp: 'The "public" modifier makes a class, method, or field accessible from any other class in any package.' },
      { q: `What is the default package in Java?`, a: 'java.lang', b: 'java.util', c: 'java.io', d: 'No default package', correct: 'a', exp: 'The "java.lang" package is automatically imported by the compiler for every Java program.' },
      { q: `How do you generate a random number in Java?`, a: 'Math.random()', b: 'Random.random()', c: 'Math.rand()', d: 'System.random()', correct: 'a', exp: 'Math.random() returns a double value between 0.0 (inclusive) and 1.0 (exclusive).' },
      { q: `What is the return type of the "hashCode()" method?`, a: 'long', b: 'int', c: 'Object', d: 'String', correct: 'b', exp: 'The hashCode() method returns an integer representation of an object, used in hashing-based collections like HashMap.' },
      { q: `Which method is called when an object is created?`, a: 'main', b: 'start', c: 'constructor', d: 'init', correct: 'c', exp: 'A constructor is a special method that is called when an object is instantiated using the "new" keyword.' },
      { q: `What is method overloading?`, a: 'Same name, different params', b: 'Different name, same params', c: 'Same name, same params', d: 'Method in child class', correct: 'a', exp: 'Method overloading allows a class to have multiple methods with the same name but different parameter lists.' },
      { q: `Which keyword is used to inherit a class?`, a: 'implements', b: 'inherits', c: 'extends', d: 'using', correct: 'c', exp: 'The "extends" keyword is used to create a subclass that inherits fields and methods from a parent class.' },
    ],
    Intermediate: [
      { q: `What is the difference between abstract class and interface?`, a: 'No difference', b: 'Abstract class can have constructors', c: 'Interface can have constructors', d: 'Abstract class cannot have methods', correct: 'b', exp: 'Abstract classes can provide common implementation and have state (fields) and constructors, while interfaces primarily define behavior.' },
      { q: `What is polymorphism in Java?`, a: 'Multiple forms of a method', b: 'Multiple classes in one file', c: 'Multiple return types', d: 'Multiple constructors', correct: 'a', exp: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass, often through method overriding or overloading.' },
      { q: `What is the "super" keyword used for?`, a: 'Call parent class members', b: 'Call child class members', c: 'Create super object', d: 'Delete object', correct: 'a', exp: 'The "super" keyword refers to the direct parent class of the current class, allowing access to its methods and constructors.' },
      { q: `Which collection guarantees no duplicates?`, a: 'List', b: 'Set', c: 'Map', d: 'Queue', correct: 'b', exp: 'A Set is a collection that cannot contain duplicate elements, modeled after the mathematical set abstraction.' },
      { q: `What is the time complexity of ArrayList.get()?`, a: 'O(1)', b: 'O(n)', c: 'O(log n)', d: 'O(n^2)', correct: 'a', exp: 'ArrayList provides constant time O(1) access because it is backed by an array, allowing direct indexing.' },
      { q: `How do you sort a List in Java?`, a: 'Collections.sort()', b: 'List.sort()', c: 'Arrays.sort()', d: 'Both a and b', correct: 'd', exp: 'Both the utility method Collections.sort() and the instance method List.sort() (since Java 8) can be used to sort lists.' },
      { q: `What is a lambda expression?`, a: 'Anonymous class', b: 'Anonymous function', c: 'Named function', d: 'Abstract method', correct: 'b', exp: 'Lambda expressions provide a clear and concise way to represent one-method interfaces using an expression.' },
      { q: `What is the purpose of "stream()" in Java 8?`, a: 'Read files', b: 'Functional operations on collections', c: 'Write to console', d: 'Create threads', correct: 'b', exp: 'Java Streams allow for functional-style operations on sequences of elements, such as map, filter, and reduce.' },
      { q: `What does "Optional" help avoid?`, a: 'NullPointerException', b: 'ClassNotFoundException', c: 'IOException', d: 'ArrayIndexOutOfBounds', correct: 'a', exp: 'Optional is a container object which may or may not contain a non-null value, encouraging better handling of "no value" cases.' },
      { q: `Which is a terminal operation in streams?`, a: 'filter', b: 'map', c: 'collect', d: 'sorted', correct: 'c', exp: 'Terminal operations like collect(), forEach(), or reduce() produce a result or side-effect and close the stream.' },
    ],
    Advanced: [
      { q: `What is a deadlock in multithreading?`, a: 'Two threads waiting on each other', b: 'Thread sleeping', c: 'Thread completing', d: 'Thread interrupted', correct: 'a', exp: 'Deadlock occurs when two or more threads are blocked forever, each waiting for a resource held by the other.' },
      { q: `What does "synchronized" keyword do?`, a: 'Speeds up execution', b: 'Ensures thread-safe access', c: 'Creates threads', d: 'Stops threads', correct: 'b', exp: 'Synchronized blocks or methods ensure that only one thread can execute a piece of code at a time for a given object monitor.' },
      { q: `What is a thread pool?`, a: 'Group of threads', b: 'Single thread', c: 'Memory pool', d: 'Connection pool', correct: 'a', exp: 'A thread pool manages a collection of reusable threads, reducing the overhead of creating new threads for every task.' },
      { q: `What is the ExecutorService used for?`, a: 'Thread management', b: 'File I/O', c: 'Database access', d: 'UI rendering', correct: 'a', exp: 'ExecutorService is a high-level API for managing and executing asynchronous tasks in thread pools.' },
      { q: `What is a checked exception?`, a: 'Checked at compile time', b: 'Checked at runtime', c: 'Ignored by compiler', d: 'Cannot be caught', correct: 'a', exp: 'Checked exceptions must be either caught or declared in the "throws" clause, as the compiler verifies this at compile time.' },
      { q: `Which keyword is used to throw an exception?`, a: 'throws', b: 'throw', c: 'catch', d: 'finally', correct: 'b', exp: 'The "throw" keyword is used to explicitly throw an exception instance from a method or block.' },
      { q: `What is the "finally" block used for?`, a: 'Cleanup code', b: 'Error handling', c: 'Return value', d: 'Loop control', correct: 'a', exp: 'The finally block always executes (unless the JVM exits), making it ideal for closing resources like files or database connections.' },
      { q: `What is a custom exception?`, a: 'User-defined exception class', b: 'Built-in exception', c: 'System exception', d: 'Runtime exception', correct: 'a', exp: 'Custom exceptions are created by extending the Exception class (for checked) or RuntimeException class (for unchecked).' },
      { q: `What is try-with-resources?`, a: 'Auto-close resources', b: 'Manual resource cleanup', c: 'Resource allocation', d: 'Memory management', correct: 'a', exp: 'Introduced in Java 7, try-with-resources automatically closes resources that implement AutoCloseable at the end of the block.' },
      { q: `Which of these is an unchecked exception?`, a: 'IOException', b: 'SQLException', c: 'NullPointerException', d: 'ClassNotFoundException', correct: 'c', exp: 'Unchecked exceptions (subclasses of RuntimeException) do not need to be declared or caught explicitly.' },
    ],
    Expert: [
      { q: `What is the JVM heap structure?`, a: 'Young + Old Generation', b: 'Stack only', c: 'Method area only', d: 'Native memory', correct: 'a', exp: 'The Java Heap is divided into Young Generation (for new objects) and Old Generation (for long-lived objects) to optimize Garbage Collection.' },
      { q: `What is garbage collection?`, a: 'Manual memory cleanup', b: 'Automatic memory reclamation', c: 'File cleanup', d: 'Thread cleanup', correct: 'b', exp: 'Garbage Collection is the process by which the JVM automatically identifies and deletes unused objects to free up memory.' },
      { q: `Which GC is the default in modern Java?`, a: 'Serial GC', b: 'Parallel GC', c: 'G1 GC', d: 'ZGC', correct: 'c', exp: 'The G1 (Garbage First) collector is designed for multi-processor machines with large memory and is the default since Java 9.' },
      { q: `What is the Singleton pattern?`, a: 'One instance per class', b: 'Multiple instances', c: 'Instance per thread', d: 'No instance', correct: 'a', exp: 'The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.' },
      { q: `What is the Factory pattern used for?`, a: 'Object creation without specifying class', b: 'Object destruction', c: 'Object cloning', d: 'Object comparison', correct: 'a', exp: 'The Factory pattern provides an interface for creating objects, but allows subclasses to alter the type of objects that will be created.' },
      { q: `What is a volatile variable?`, a: 'Thread-local value', b: 'Value read from main memory', c: 'Constant value', d: 'Immutable value', correct: 'b', exp: 'Marking a variable as volatile ensures that its value is always read from and written to main memory, ensuring visibility across threads.' },
      { q: `What is the ClassLoader?`, a: 'Loads .class files into JVM', b: 'Compiles Java code', c: 'Runs Java code', d: 'Debugs Java code', correct: 'a', exp: 'ClassLoaders are part of the JRE that dynamically load Java classes into the JVM during runtime.' },
      { q: `What is reflection used for?`, a: 'Inspecting classes at runtime', b: 'Optimizing code', c: 'Compiling code', d: 'Debugging code', correct: 'a', exp: 'Reflection allows a program to inspect and modify its own structure and behavior (classes, methods, fields) at runtime.' },
      { q: `What is a functional interface?`, a: 'Interface with single abstract method', b: 'Interface with multiple methods', c: 'Abstract class', d: 'Regular class', correct: 'a', exp: 'A functional interface is an interface that contains exactly one abstract method, making it compatible with lambda expressions.' },
      { q: `What is method reference in Java 8?`, a: 'Shorthand for lambda', b: 'New method type', c: 'Abstract method', d: 'Static method only', correct: 'a', exp: 'Method references (e.g., System.out::println) are a compact shorthand for lambda expressions that call an existing method.' },
    ],
  };

  const diff = levelNum <= 10 ? 'Beginner' : levelNum <= 25 ? 'Intermediate' : levelNum <= 40 ? 'Advanced' : 'Expert';
  const pool = templates[diff];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 10);

  return {
    levelNumber: levelNum,
    difficultyRating: diff,
    questions: selected.map((q, i) => ({
      id: idStart + i,
      questionText: q.q,
      optionA: q.a,
      optionB: q.b,
      optionC: q.c,
      optionD: q.d,
      correctOption: q.correct,
      explanation: q.exp,
    })),
  };
}

export function getAllLevels(): LevelData[] {
  const levels: LevelData[] = [...HARD_CODED];
  for (let i = 6; i <= 50; i++) {
    levels.push(generateQuestionsForLevel(i));
  }
  return levels;
}
