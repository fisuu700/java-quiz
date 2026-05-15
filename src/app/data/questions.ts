import { LevelData } from '../models';

const HARD_CODED: LevelData[] = [
  {
    levelNumber: 1, difficultyRating: 'Beginner',
    questions: [
      { id: 1, questionText: 'What is the entry point of a Java application?', optionA: 'main() function', optionB: 'public static void main(String[] args)', optionC: 'public void main()', optionD: 'static void main()', correctOption: 'b' },
      { id: 2, questionText: 'Which of the following is NOT a valid Java comment?', optionA: '// comment', optionB: '/* comment */', optionC: '<!-- comment -->', optionD: '/** comment */', correctOption: 'c' },
      { id: 3, questionText: 'What does "System.out.println()" do?', optionA: 'Reads input', optionB: 'Prints and moves to new line', optionC: 'Prints on same line', optionD: 'Clears the console', correctOption: 'b' },
      { id: 4, questionText: 'Which data type stores a single character?', optionA: 'String', optionB: 'char', optionC: 'Character', optionD: 'varchar', correctOption: 'b' },
      { id: 5, questionText: 'What is the size of an int in Java?', optionA: '16 bits', optionB: '32 bits', optionC: '64 bits', optionD: '8 bits', correctOption: 'b' },
      { id: 6, questionText: 'Which keyword is used to create a constant variable?', optionA: 'const', optionB: 'static', optionC: 'final', optionD: 'constant', correctOption: 'c' },
      { id: 7, questionText: 'Java is a ___ programming language.', optionA: 'compiled', optionB: 'interpreted', optionC: 'compiled and interpreted', optionD: 'scripting', correctOption: 'c' },
      { id: 8, questionText: 'Which of these is a valid variable name in Java?', optionA: '2value', optionB: '_value', optionC: 'my-var', optionD: 'class', correctOption: 'b' },
      { id: 9, questionText: 'What is the default value of a boolean variable in Java?', optionA: 'true', optionB: 'false', optionC: '0', optionD: 'null', correctOption: 'b' },
      { id: 10, questionText: 'Which operator is used for integer division?', optionA: '/', optionB: '%', optionC: '//', optionD: '\\', correctOption: 'a' },
    ]
  },
  {
    levelNumber: 2, difficultyRating: 'Beginner',
    questions: [
      { id: 11, questionText: 'What is implicit type conversion called?', optionA: 'Casting', optionB: 'Widening', optionC: 'Narrowing', optionD: 'Parsing', correctOption: 'b' },
      { id: 12, questionText: 'What is the range of the byte data type?', optionA: '-128 to 127', optionB: '0 to 255', optionC: '-32768 to 32767', optionD: '-256 to 255', correctOption: 'a' },
      { id: 13, questionText: 'Which of the following is a wrapper class?', optionA: 'int', optionB: 'Integer', optionC: 'boolean', optionD: 'char', correctOption: 'b' },
      { id: 14, questionText: 'What does "double" store compared to "float"?', optionA: 'Less precision', optionB: 'More precision', optionC: 'Same precision', optionD: 'Only integers', correctOption: 'b' },
      { id: 15, questionText: 'What happens when you cast a double to an int?', optionA: 'Rounded to nearest', optionB: 'Decimal part truncated', optionC: 'Throws exception', optionD: 'Compilation error', correctOption: 'b' },
      { id: 16, questionText: 'Which is NOT a primitive data type?', optionA: 'int', optionB: 'String', optionC: 'boolean', optionD: 'char', correctOption: 'b' },
      { id: 17, questionText: 'What is autoboxing in Java?', optionA: 'Converting primitive to wrapper', optionB: 'Converting wrapper to primitive', optionC: 'Creating a new object', optionD: 'Sorting an array', correctOption: 'a' },
      { id: 18, questionText: 'What does "var" keyword do in Java 10+?', optionA: 'Creates a variable', optionB: 'Type inference for local variables', optionC: 'Declares a constant', optionD: 'Creates a global variable', correctOption: 'b' },
      { id: 19, questionText: 'Which is true about the "long" data type?', optionA: '32-bit signed', optionB: '64-bit signed', optionC: '128-bit signed', optionD: '64-bit unsigned', correctOption: 'b' },
      { id: 20, questionText: 'What is the result of "int x = (int) 3.9;"?', optionA: '4', optionB: '3', optionC: '3.9', optionD: 'Compilation error', correctOption: 'b' },
    ]
  },
  {
    levelNumber: 3, difficultyRating: 'Beginner',
    questions: [
      { id: 21, questionText: 'What does the "%" operator do?', optionA: 'Percentage', optionB: 'Modulus (remainder)', optionC: 'Division', optionD: 'Bitwise AND', correctOption: 'b' },
      { id: 22, questionText: 'What is the result of "5 + 3 * 2"?', optionA: '16', optionB: '11', optionC: '13', optionD: '10', correctOption: 'b' },
      { id: 23, questionText: 'Which operator checks both conditions and short-circuits?', optionA: '&', optionB: '|', optionC: '&&', optionD: '^', correctOption: 'c' },
      { id: 24, questionText: 'What does "++x" do?', optionA: 'Increments then returns', optionB: 'Returns then increments', optionC: 'Adds 2 to x', optionD: 'Decrements x', correctOption: 'a' },
      { id: 25, questionText: 'Which statement is used for multi-way branching?', optionA: 'if', optionB: 'while', optionC: 'switch', optionD: 'for', correctOption: 'c' },
      { id: 26, questionText: 'What is the ternary operator in Java?', optionA: '?:', optionB: '??', optionC: '?', optionD: '::', correctOption: 'a' },
      { id: 27, questionText: 'What is the result of "!true && false"?', optionA: 'true', optionB: 'false', optionC: 'Compilation error', optionD: 'null', correctOption: 'b' },
      { id: 28, questionText: 'Which loop guarantees at least one execution?', optionA: 'for', optionB: 'while', optionC: 'do-while', optionD: 'foreach', correctOption: 'c' },
      { id: 29, questionText: 'What is the output of "break" inside a loop?', optionA: 'Skips current iteration', optionB: 'Exits the loop immediately', optionC: 'Restarts the loop', optionD: 'Throws an exception', correctOption: 'b' },
      { id: 30, questionText: 'What does "continue" do in a loop?', optionA: 'Exits the loop', optionB: 'Skips rest of current iteration', optionC: 'Restarts the loop', optionD: 'Pauses the loop', correctOption: 'b' },
    ]
  },
  {
    levelNumber: 4, difficultyRating: 'Beginner',
    questions: [
      { id: 31, questionText: 'How do you declare an array of 10 integers?', optionA: 'int arr[10];', optionB: 'int[] arr = new int[10];', optionC: 'int arr = new int[10];', optionD: 'array<int> arr = new;', correctOption: 'b' },
      { id: 32, questionText: 'What is the index of the first element in an array?', optionA: '1', optionB: '0', optionC: '-1', optionD: 'null', correctOption: 'b' },
      { id: 33, questionText: 'What is "ArrayIndexOutOfBoundsException"?', optionA: 'Array is full', optionB: 'Accessing invalid index', optionC: 'Array is empty', optionD: 'Array type mismatch', correctOption: 'b' },
      { id: 34, questionText: 'What does "arr.length" return?', optionA: 'Number of elements', optionB: 'Last index', optionC: 'Memory size', optionD: 'First index', correctOption: 'a' },
      { id: 35, questionText: 'How do you create a 2D array with 3 rows, 4 columns?', optionA: 'int[3][4] arr;', optionB: 'int[][] arr = new int[3][4];', optionC: 'int arr[3][4];', optionD: 'int[3x4] arr;', correctOption: 'b' },
      { id: 36, questionText: 'What is an anonymous array?', optionA: 'Array without name', optionB: 'Array of null values', optionC: 'Empty array', optionD: 'Array with no type', correctOption: 'a' },
      { id: 37, questionText: 'Which package contains "Arrays" utility class?', optionA: 'java.util', optionB: 'java.lang', optionC: 'java.io', optionD: 'java.array', correctOption: 'a' },
      { id: 38, questionText: 'How do you copy an array in Java?', optionA: 'arr.copy()', optionB: 'Arrays.copyOf()', optionC: 'arr.clone()', optionD: 'Both b and c', correctOption: 'd' },
      { id: 39, questionText: 'What is "ArrayStoreException"?', optionA: 'Array is full', optionB: 'Assigning wrong type to array element', optionC: 'Array is empty', optionD: 'Deleting from array', correctOption: 'b' },
      { id: 40, questionText: 'What is a jagged array?', optionA: 'Array with null values', optionB: '2D array with varying column lengths', optionC: 'Sorted array', optionD: 'Array of arrays', correctOption: 'b' },
    ]
  },
  {
    levelNumber: 5, difficultyRating: 'Beginner',
    questions: [
      { id: 41, questionText: 'Is String a primitive or object in Java?', optionA: 'Primitive', optionB: 'Object', optionC: 'Both', optionD: 'Neither', correctOption: 'b' },
      { id: 42, questionText: 'How do you compare two Strings for equality?', optionA: '==', optionB: 'equals()', optionC: 'compare()', optionD: 'match()', correctOption: 'b' },
      { id: 43, questionText: 'What is the String literal pool?', optionA: 'Heap memory for Strings', optionB: 'Special memory area for literal Strings', optionC: 'Garbage collection area', optionD: 'Stack memory for Strings', correctOption: 'b' },
      { id: 44, questionText: 'What does "substring(1, 4)" return for "Hello"?', optionA: 'Hel', optionB: 'ell', optionC: 'ello', optionD: 'Hell', correctOption: 'b' },
      { id: 45, questionText: 'Is String mutable or immutable?', optionA: 'Mutable', optionB: 'Immutable', optionC: 'Partially mutable', optionD: 'Depends on version', correctOption: 'b' },
      { id: 46, questionText: 'Which class is a mutable version of String?', optionA: 'StringBuffer and StringBuilder', optionB: 'CharSequence', optionC: 'StringToken', optionD: 'StringUtils', correctOption: 'a' },
      { id: 47, questionText: 'What does "concat()" do?', optionA: 'Compares strings', optionB: 'Concatenates two strings', optionC: 'Splits a string', optionD: 'Reverses a string', correctOption: 'b' },
      { id: 48, questionText: 'What is the output of "Java".charAt(1)?', optionA: 'J', optionB: 'a', optionC: 'v', optionD: 'IndexOutOfBounds', correctOption: 'b' },
      { id: 49, questionText: 'How do you convert a String to an int?', optionA: '(int) str', optionB: 'Integer.parseInt(str)', optionC: 'str.toInt()', optionD: 'int.valueOf(str)', correctOption: 'b' },
      { id: 50, questionText: 'What does "trim()" do?', optionA: 'Removes all spaces', optionB: 'Removes leading and trailing whitespace', optionC: 'Truncates the string', optionD: 'Converts to lowercase', correctOption: 'b' },
    ]
  },
];

function generateQuestionsForLevel(levelNum: number): LevelData {
  const idStart = (levelNum - 1) * 10 + 1;
  const templates: Record<string, Array<{ q: string; a: string; b: string; c: string; d: string; correct: string }>> = {
    Beginner: [
      { q: `What is the correct way to declare a variable in Java?`, a: 'variable name = value;', b: 'type name = value;', c: 'name = value;', d: 'var name := value;', correct: 'b' },
      { q: `Which of these is a reserved keyword in Java?`, a: 'typeof', b: 'instanceof', c: 'let', d: 'define', correct: 'b' },
      { q: `What is the purpose of the "package" statement?`, a: 'Import libraries', b: 'Group related classes', c: 'Declare variables', d: 'Define methods', correct: 'b' },
      { q: `Which access modifier allows access from anywhere?`, a: 'private', b: 'protected', c: 'public', d: 'default', correct: 'c' },
      { q: `What is the default package in Java?`, a: 'java.lang', b: 'java.util', c: 'java.io', d: 'No default package', correct: 'a' },
      { q: `How do you generate a random number in Java?`, a: 'Math.random()', b: 'Random.random()', c: 'Math.rand()', d: 'System.random()', correct: 'a' },
      { q: `What is the return type of the "hashCode()" method?`, a: 'long', b: 'int', c: 'Object', d: 'String', correct: 'b' },
      { q: `Which method is called when an object is created?`, a: 'main', b: 'start', c: 'constructor', d: 'init', correct: 'c' },
      { q: `What is method overloading?`, a: 'Same name, different params', b: 'Different name, same params', c: 'Same name, same params', d: 'Method in child class', correct: 'a' },
      { q: `Which keyword is used to inherit a class?`, a: 'implements', b: 'inherits', c: 'extends', d: 'using', correct: 'c' },
    ],
    Intermediate: [
      { q: `What is the difference between abstract class and interface?`, a: 'No difference', b: 'Abstract class can have constructors', c: 'Interface can have constructors', d: 'Abstract class cannot have methods', correct: 'b' },
      { q: `What is polymorphism in Java?`, a: 'Multiple forms of a method', b: 'Multiple classes in one file', c: 'Multiple return types', d: 'Multiple constructors', correct: 'a' },
      { q: `What is the "super" keyword used for?`, a: 'Call parent class members', b: 'Call child class members', c: 'Create super object', d: 'Delete object', correct: 'a' },
      { q: `Which collection guarantees no duplicates?`, a: 'List', b: 'Set', c: 'Map', d: 'Queue', correct: 'b' },
      { q: `What is the time complexity of ArrayList.get()?`, a: 'O(1)', b: 'O(n)', c: 'O(log n)', d: 'O(n^2)', correct: 'a' },
      { q: `How do you sort a List in Java?`, a: 'Collections.sort()', b: 'List.sort()', c: 'Arrays.sort()', d: 'Both a and b', correct: 'd' },
      { q: `What is a lambda expression?`, a: 'Anonymous class', b: 'Anonymous function', c: 'Named function', d: 'Abstract method', correct: 'b' },
      { q: `What is the purpose of "stream()" in Java 8?`, a: 'Read files', b: 'Functional operations on collections', c: 'Write to console', d: 'Create threads', correct: 'b' },
      { q: `What does "Optional" help avoid?`, a: 'NullPointerException', b: 'ClassNotFoundException', c: 'IOException', d: 'ArrayIndexOutOfBounds', correct: 'a' },
      { q: `Which is a terminal operation in streams?`, a: 'filter', b: 'map', c: 'collect', d: 'sorted', correct: 'c' },
    ],
    Advanced: [
      { q: `What is a deadlock in multithreading?`, a: 'Two threads waiting on each other', b: 'Thread sleeping', c: 'Thread completing', d: 'Thread interrupted', correct: 'a' },
      { q: `What does "synchronized" keyword do?`, a: 'Speeds up execution', b: 'Ensures thread-safe access', c: 'Creates threads', d: 'Stops threads', correct: 'b' },
      { q: `What is a thread pool?`, a: 'Group of threads', b: 'Single thread', c: 'Memory pool', d: 'Connection pool', correct: 'a' },
      { q: `What is the ExecutorService used for?`, a: 'Thread management', b: 'File I/O', c: 'Database access', d: 'UI rendering', correct: 'a' },
      { q: `What is a checked exception?`, a: 'Checked at compile time', b: 'Checked at runtime', c: 'Ignored by compiler', d: 'Cannot be caught', correct: 'a' },
      { q: `Which keyword is used to throw an exception?`, a: 'throws', b: 'throw', c: 'catch', d: 'finally', correct: 'b' },
      { q: `What is the "finally" block used for?`, a: 'Cleanup code', b: 'Error handling', c: 'Return value', d: 'Loop control', correct: 'a' },
      { q: `What is a custom exception?`, a: 'User-defined exception class', b: 'Built-in exception', c: 'System exception', d: 'Runtime exception', correct: 'a' },
      { q: `What is try-with-resources?`, a: 'Auto-close resources', b: 'Manual resource cleanup', c: 'Resource allocation', d: 'Memory management', correct: 'a' },
      { q: `Which of these is an unchecked exception?`, a: 'IOException', b: 'SQLException', c: 'NullPointerException', d: 'ClassNotFoundException', correct: 'c' },
    ],
    Expert: [
      { q: `What is the JVM heap structure?`, a: 'Young + Old Generation', b: 'Stack only', c: 'Method area only', d: 'Native memory', correct: 'a' },
      { q: `What is garbage collection?`, a: 'Manual memory cleanup', b: 'Automatic memory reclamation', c: 'File cleanup', d: 'Thread cleanup', correct: 'b' },
      { q: `Which GC is the default in modern Java?`, a: 'Serial GC', b: 'Parallel GC', c: 'G1 GC', d: 'ZGC', correct: 'c' },
      { q: `What is the Singleton pattern?`, a: 'One instance per class', b: 'Multiple instances', c: 'Instance per thread', d: 'No instance', correct: 'a' },
      { q: `What is the Factory pattern used for?`, a: 'Object creation without specifying class', b: 'Object destruction', c: 'Object cloning', d: 'Object comparison', correct: 'a' },
      { q: `What is a volatile variable?`, a: 'Thread-local value', b: 'Value read from main memory', c: 'Constant value', d: 'Immutable value', correct: 'b' },
      { q: `What is the ClassLoader?`, a: 'Loads .class files into JVM', b: 'Compiles Java code', c: 'Runs Java code', d: 'Debugs Java code', correct: 'a' },
      { q: `What is reflection used for?`, a: 'Inspecting classes at runtime', b: 'Optimizing code', c: 'Compiling code', d: 'Debugging code', correct: 'a' },
      { q: `What is a functional interface?`, a: 'Interface with single abstract method', b: 'Interface with multiple methods', c: 'Abstract class', d: 'Regular class', correct: 'a' },
      { q: `What is method reference in Java 8?`, a: 'Shorthand for lambda', b: 'New method type', c: 'Abstract method', d: 'Static method only', correct: 'a' },
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
