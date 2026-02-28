Parsing as a Connected Process

Lexical Analysis → Syntactic Analysis → Semantic Parsing

Think of it as a pipeline:

Step 1: Lexical Analysis

The raw code you write is just text.

Lexical analysis breaks the text into tokens (small meaningful units like +, -, function).

Output: a stream of tokens ready for structure checking.

Step 2: Syntactic Analysis

The token stream goes to syntactic analysis.

Here, the parser checks if the tokens form a valid structure according to the grammar (rules of the programming language).

It organizes tokens into a tree (parse tree or AST) that represents the program’s structure.

Output: a structured representation of the program.

Step 3: Semantic Parsing

Finally, semantic parsing interprets the meaning of the structured program.

It ensures that operations make sense (e.g., you’re not adding a number to a string in an invalid way).

Output: a program representation that is understood and ready for execution.

First you separate the letters into tokens

Then you arrange them into a meaningful structure

Then you figure out what the structure actually does

1. Top-Down Parsing
   This involves searching a parse tree to find the left-most derivations of an input stream by using a top down expansion.

token is the smallest unit in a programming language that possesses some meaning

Lexical Analysis: A lexical analyzer is used to produce tokens from a streamof input stringcharacters, which are broken into small components to form meaningful expressions.

Syntactic Analysis: Checks whether the generated tokens form a meaningful expression.

Semantic Parsing: The f(ii). Non-recursive descent parser:
It is also known as LL(1) parser or predictive parser or without backtracking parser or dynamicparser(ii). Non-recursive descent parser:
It is also known as LL(1) parser or predictive parser or without backtracking parser or dynamicparserinal parsing stage in which the meaning and implications of thevalidatedexpression are determined and necessary actions are taken.

(i) Recursive descent parser:
It is also known as Brute force parser or the with backtracking parser. It basically generates theparsetree by using brute force and backtracking. (ii). Non-recursive descent parser:

It is also known as LL(1) parser or predictive parser or without backtracking parser or dynamicparser.
It uses parsing table to generate the parse tree instead of
