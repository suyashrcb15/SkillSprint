export async function generateAssessmentQuestions(category: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const allQuestions = {
        aptitude: [
            {
                question: "What is 10% of 250?",
                options: {
                    A: "25",
                    B: "20",
                    C: "30",
                    D: "35",
                },
                answer: "A",
                explanation: "To find 10% of 250, multiply 250 by 0.10 (or divide by 10): $250 \times 0.10 = 25$."
            },
            {
                question: "What is the value of 5² + 3²?",
                options: {
                    A: "25",
                    B: "34",
                    C: "30",
                    D: "36",
                },
                answer: "B",
                explanation: "First, calculate the squares: $5^2 = 5 \times 5 = 25$ and $3^2 = 3 \times 3 = 9$. Then, add them together: $25 + 9 = 34$."
            },
            {
                question: "Find the average of 10, 20, and 30.",
                options: {
                    A: "25",
                    B: "20",
                    C: "30",
                    D: "15",
                },
                answer: "B",
                explanation: "The average is found by summing the numbers and dividing by the count: $(10 + 20 + 30) / 3 = 60 / 3 = 20$."
            },
            {
                question: "Solve: 6 × 7 - 4",
                options: {
                    A: "38",
                    B: "42",
                    C: "40",
                    D: "44",
                },
                answer: "A",
                explanation: "Following the order of operations (multiplication before subtraction): $6 \times 7 = 42$, then $42 - 4 = 38$."
            },
            {
                question: "What is the square of 11?",
                options: {
                    A: "121",
                    B: "111",
                    C: "100",
                    D: "131",
                },
                answer: "A",
                explanation: "The square of 11 is $11 \times 11 = 121$."
            },
            {
                question: "If a = 4, b = 3, find ab + b².",
                options: {
                    A: "21",
                    B: "24",
                    C: "25",
                    D: "30",
                },
                answer: "A",
                explanation: "Substitute the values: $ab + b^2 = (4 \times 3) + (3 \times 3) = 12 + 9 = 21$."
            },
            {
                question: "A shopkeeper gives 20% discount. What is the selling price of ₹500 item?",
                options: {
                    A: "₹400",
                    B: "₹450",
                    C: "₹480",
                    D: "₹460",
                },
                answer: "A",
                explanation: "The discount amount is 20% of ₹500, which is $(20/100) \times 500 = ₹100$. The selling price is the original price minus the discount: $₹500 - ₹100 = ₹400$."
            },
            {
                question: "What is ¼ of 64?",
                options: {
                    A: "16",
                    B: "32",
                    C: "24",
                    D: "20",
                },
                answer: "A",
                explanation: "To find ¼ of 64, divide 64 by 4: $64 / 4 = 16$."
            },
            {
                question: "How many seconds are there in 1 hour?",
                options: {
                    A: "3600",
                    B: "3000",
                    C: "1800",
                    D: "2400",
                },
                answer: "A",
                explanation: "There are 60 minutes in an hour and 60 seconds in a minute. So, the total seconds in an hour is $60 \times 60 = 3600$."
            },
            {
                question: "Simplify: 9 + (3 × 2)",
                options: {
                    A: "15",
                    B: "18",
                    C: "12",
                    D: "21",
                },
                answer: "A",
                explanation: "According to the order of operations, perform the multiplication inside the parentheses first: $3 \times 2 = 6$. Then, add this to 9: $9 + 6 = 15$."
            }
        ],
        reasoning: [
            {
                question: "Which does not belong: Dog, Cat, Elephant, Car?",
                options: {A: "Dog", B: "Cat", C: "Elephant", D: "Car"},
                answer: "D",
                explanation: "Dog, Cat, and Elephant are all living animals, while Car is a non-living mechanical vehicle."
            },
            {
                question: "Find the next number: 2, 4, 8, 16, ?",
                options: {A: "20", B: "24", C: "32", D: "30"},
                answer: "C",
                explanation: "The sequence follows a pattern where each number is double the previous one: $2 \times 2 = 4$, $4 \times 2 = 8$, $8 \times 2 = 16$. Therefore, the next number is $16 \times 2 = 32$."
            },
            {
                question: "If A = 1, B = 2, then Z = ?",
                options: {A: "24", B: "25", C: "26", D: "27"},
                answer: "C",
                explanation: "This is a simple alphabetical sequence where each letter is assigned a numerical value based on its position in the alphabet. Z is the 26th letter."
            },
            {
                question: "Find the odd one out: Red, Blue, Green, Circle",
                options: {A: "Red", B: "Blue", C: "Green", D: "Circle"},
                answer: "D",
                explanation: "Red, Blue, and Green are all colors, while Circle is a geometric shape."
            },
            {
                question: "What comes next: M, N, O, ?",
                options: {A: "P", B: "Q", C: "R", D: "S"},
                answer: "A",
                explanation: "The sequence follows the alphabetical order. M, N, O are followed by P."
            },
            {
                question: "What comes next: 1, 3, 6, 10, ?",
                options: {A: "12", B: "15", C: "16", D: "18"},
                answer: "B",
                explanation: "The pattern here is that the difference between consecutive numbers increases by 1 each time: $3-1=2$, $6-3=3$, $10-6=4$. So, the next difference should be 5, and $10+5=15$."
            },
            {
                question: "Which number replaces ?: 5, 10, ?, 40",
                options: {A: "20", B: "25", C: "30", D: "35"},
                answer: "A",
                explanation: "The sequence shows a pattern of multiplication by 2: $5 \times 2 = 10$, $10 \times 2 = 20$, $20 \times 2 = 40$."
            },
            {
                question: "If 2 + 3 = 13, 3 + 4 = 25, what is 4 + 5?",
                options: {A: "41", B: "35", C: "40", D: "45"},
                answer: "A",
                explanation: "The pattern is $(first\_number)^2 + (second\_number)^2$. For 2 + 3, $2^2 + 3^2 = 4 + 9 = 13$. For 3 + 4, $3^2 + 4^2 = 9 + 16 = 25$. So, for 4 + 5, $4^2 + 5^2 = 16 + 25 = 41$."
            },
            {
                question: "Choose the odd one: Square, Triangle, Circle, Rectangle",
                options: {A: "Square", B: "Triangle", C: "Circle", D: "Rectangle"},
                answer: "C",
                explanation: "Square, Triangle, and Rectangle are all polygons (closed shapes with straight sides), while Circle is a closed shape with a curved boundary."
            },
            {
                question: "If Monday is 1, Tuesday is 2, what is Sunday?",
                options: {A: "6", B: "7", C: "5", D: "4"},
                answer: "B",
                explanation: "This assigns a numerical value to each day of the week starting from Monday as 1. Therefore, Sunday, being the 7th day, corresponds to 7."
            }
        ],
        comprehension: {
            passage: `
            It was a peaceful village nestled in the valley, surrounded by lush green hills.
            The villagers lived a simple life, in harmony with nature. Children played freely, birds sang from treetops,
            and farmers worked in their fields with dedication. Festivals were celebrated with joy, and every evening,
            people gathered to share stories. It was a life of contentment and community spirit.
        `,
            questions: [
                {
                    question: "What best describes the village?",
                    options: {A: "Chaotic", B: "Peaceful", C: "Modern", D: "Crowded"},
                    answer: "B",
                    explanation: "The first sentence of the passage states, 'It was a peaceful village...'"
                },
                {
                    question: "How did villagers live?",
                    options: {A: "With competition", B: "With fear", C: "With harmony", D: "With haste"},
                    answer: "C",
                    explanation: "The passage mentions, 'The villagers lived a simple life, in harmony with nature.'"
                },
                {
                    question: "What activity is mentioned about children?",
                    options: {A: "Reading books", B: "Helping parents", C: "Playing freely", D: "Watching TV"},
                    answer: "C",
                    explanation: "The passage states, 'Children played freely...'"
                },
                {
                    question: "Who sang from treetops?",
                    options: {A: "Villagers", B: "Children", C: "Birds", D: "Wind"},
                    answer: "C",
                    explanation: "The passage says, '...birds sang from treetops...'"
                },
                {
                    question: "How were festivals celebrated?",
                    options: {A: "With silence", B: "With anger", C: "With joy", D: "With noise"},
                    answer: "C",
                    explanation: "The passage mentions, 'Festivals were celebrated with joy...'"
                },
                {
                    question: "What was shared in the evenings?",
                    options: {A: "Food", B: "Stories", C: "Money", D: "News"},
                    answer: "B",
                    explanation: "The passage states, '...every evening, people gathered to share stories.'"
                },
                {
                    question: "What does the passage emphasize?",
                    options: {A: "City life", B: "Stress", C: "Contentment", D: "Travel"},
                    answer: "C",
                    explanation: "The concluding sentence mentions, 'It was a life of contentment and community spirit.'"
                },
                {
                    question: "What did farmers do?",
                    options: {A: "Sell crops", B: "Rest all day", C: "Worked in fields", D: "Travel abroad"},
                    answer: "C",
                    explanation: "The passage says, '...and farmers worked in their fields with dedication.'"
                },
                {
                    question: "Which word defines community spirit?",
                    options: {A: "Selfishness", B: "Unity", C: "Greed", D: "Laziness"},
                    answer: "B",
                    explanation: "Community spirit implies a sense of togetherness and shared identity, which is best described by 'Unity'."
                },
                {
                    question: "What best summarizes the passage?",
                    options: {
                        A: "A city celebration",
                        B: "Busy market",
                        C: "Village lifestyle and peace",
                        D: "Festival noise"
                    },
                    answer: "C",
                    explanation: "The passage describes a peaceful village, the simple life of its inhabitants, and their harmony with nature, all pointing to a 'Village lifestyle and peace'."
                }
            ]
        },
        coding: [
            {
                question: "Which is a correct Python keyword?",
                options: {A: "def", B: "define", C: "function", D: "method"},
                answer: "A",
                explanation: "`def` is the keyword used to define a function in Python."
            },
            {
                question: "How do you print in Python?",
                options: {A: "console.log()", B: "printf()", C: "echo", D: "print()"},
                answer: "D",
                explanation: "`print()` is the built-in function in Python used to display output."
            },
            {
                question: "Which data type is used for decimals?",
                options: {A: "int", B: "str", C: "float", D: "bool"},
                answer: "C",
                explanation: "In Python, the `float` data type is used to represent floating-point numbers, which include decimals."
            },
            {
                question: "Which symbol is used for single-line comments in Python?",
                options: {A: "//", B: "#", C: "/*", D: "--"},
                answer: "B",
                explanation: "The `#` symbol is used to denote the start of a single-line comment in Python."
            },
            {
                question: "What is the result of 3 ** 2 in Python?",
                options: {A: "6", B: "8", C: "9", D: "12"},
                answer: "C",
                explanation: "The `**` operator in Python is used for exponentiation. $3 ** 2$ means 3 raised to the power of 2, which is $3 \times 3 = 9$."
            },
            {
                question: "Which operator is used for equality check?",
                options: {A: "=", B: "==", C: "!=", D: "<>"},
                answer: "B",
                explanation: "The double equals sign `==` is the comparison operator used to check if two values are equal in Python. The single equals `=` is for assignment."
            },
            {
                question: "What does `len([1,2,3])` return?",
                options: {A: "2", B: "3", C: "4", D: "0"},
                answer: "B",
                explanation: "The `len()` function in Python returns the number of items in a sequence (like a list). The list `[1, 2, 3]` has 3 elements."
            },
            {
                question: "How to start a function in Python?",
                options: {A: "function()", B: "def", C: "define()", D: "fun"},
                answer: "B",
                explanation: "In Python, a function definition starts with the keyword `def` followed by the function name and parentheses."
            },
            {
                question: "Which is a boolean value?",
                options: {A: "0", B: "Yes", C: "True", D: "1"},
                answer: "C",
                explanation: "`True` and `False` are the two boolean values in Python, representing logical truth and falsehood."
            },
            {
                question: "Which keyword is used for loops?",
                options: {A: "loop", B: "iterate", C: "for", D: "goto"},
                answer: "C",
                explanation: "Python primarily uses the `for` keyword for iterating over sequences and the `while` keyword for conditional loops."
            }
        ],
        "web-development": [
            {
                question: "What does HTML stand for?",
                options: {
                    A: "Hyper Text Markup Language",
                    B: "Home Tool Markup Language",
                    C: "Hyperlinks Mark Language",
                    D: "Hyper Tool Markup Language"
                },
                answer: "A",
                explanation: "HTML stands for **Hyper Text Markup Language**. It's the standard markup language for creating web pages and web applications, defining the structure and content of a webpage."
            },
            {
                question: "What is the correct tag for creating a hyperlink?",
                options: {A: "<a>", B: "<link>", C: "<href>", D: "<url>"},
                answer: "A",
                explanation: "The correct HTML tag for creating a hyperlink (a clickable link to another page or resource) is `<a>`, which stands for anchor. The destination of the link is specified using the `href` attribute within this tag."
            },
            {
                question: "Which CSS property changes text color?",
                options: {A: "text-color", B: "font-color", C: "color", D: "text-style"},
                answer: "C",
                explanation: "The CSS property used to change the color of text is simply `color`. `text-color` and `font-color` are not standard CSS properties for this purpose. `text-style` is a more general term and not a specific property for color."
            },
            {
                question: "What does CSS stand for?",
                options: {
                    A: "Creative Style System",
                    B: "Computer Style Sheets",
                    C: "Cascading Style Sheets",
                    D: "Color Styling System"
                },
                answer: "C",
                explanation: "CSS stands for **Cascading Style Sheets**. It's a stylesheet language used to describe the presentation of a document written in a markup language like HTML, controlling the layout, colors, fonts, and other visual aspects."
            },
            {
                question: "Which tag is used for JavaScript?",
                options: {A: "<js>", B: "<script>", C: "<javascript>", D: "<code>"},
                answer: "B",
                explanation: "The `<script>` tag is used in HTML to embed or reference executable JavaScript code. This allows for dynamic behavior and interactivity on web pages. `<js>` and `<javascript>` are not standard HTML tags for this purpose, and `<code>` is used for displaying code snippets."
            },
            {
                question: "Which HTML element is used for images?",
                options: {A: "<img>", B: "<pic>", C: "<image>", D: "<src>"},
                answer: "A",
                explanation: "The `<img>` tag is the correct HTML element used to embed an image in a web page. The actual image source is specified using the `src` attribute within the `<img>` tag. `<pic>` and `<image>` are not standard HTML tags for images, and `<src>` is an attribute, not an element."
            },
            {
                question: "Which framework is for frontend development?",
                options: {A: "React", B: "Node.js", C: "MongoDB", D: "Express"},
                answer: "A",
                explanation: "**React** is a popular JavaScript library and framework specifically designed for building user interfaces (UIs) and UI components for the frontend of web applications. Node.js and Express are primarily used for backend development, and MongoDB is a NoSQL database."
            },
            {
                question: "Which HTTP method is used to submit data?",
                options: {A: "GET", B: "POST", C: "PUT", D: "DELETE"},
                answer: "B",
                explanation: "The **POST** HTTP method is commonly used to send data to a server to create or update a resource, often used when submitting forms. GET is used to retrieve data, PUT is used to update an existing resource, and DELETE is used to remove a resource."
            },
            {
                question: "Which CSS unit is relative to font size?",
                options: {A: "px", B: "em", C: "%", D: "vh"},
                answer: "B",
                explanation: "The **em** unit in CSS is a relative unit that is equal to the computed font size of the element on which it is used. This makes it useful for creating scalable and responsive designs based on text size. `px` is an absolute unit (pixels), `%` is usually relative to the parent element's property, and `vh` is relative to 1% of the viewport height."
            },
            {
                question: "Which of the option describes Unordered-List?",
                options: {A: "<ol>", B: "<ul>", C: "<li>", D: "All of these"},
                answer: "B",
                explanation: "Unordered List is Described by <ul> tag"
            },
        ],
    };
    if (category === "comprehension") {
        return allQuestions.comprehension;
    }

    return allQuestions[category as keyof typeof allQuestions] || [];
}
