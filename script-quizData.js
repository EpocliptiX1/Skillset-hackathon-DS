const flashcardsData = {
    math: [{
            title: 'Pythagorean Theorem',
            definition: 'a² + b² = c²',
            tags: ['Geometry', 'Triangles'],
            difficulty: 'medium',
            description: 'Relates the lengths of sides in a right triangle...',
            questions: [{
                    question: 'What does the Pythagorean Theorem relate?',
                    options: ['Sides of a right triangle', 'Angles of any triangle', 'Area of a circle', 'Slope of a line'],
                    correctIndex: 0
                },
                {
                    question: 'If a=3 and b=4, what is c?',
                    options: ['5', '7', '12', '25'],
                    correctIndex: 0
                },
                {
                    question: 'Which side is the hypotenuse?',
                    options: ['The longest side (c)', 'The shortest side (a)', 'The adjacent side (b)', 'The base'],
                    correctIndex: 0
                },
                {
                    question: 'What is the converse of the theorem?',
                    options: ['If a² + b² = c² → right triangle', 'If a + b = c → right triangle', 'Angles sum to 180° → right triangle', 'Equal sides → right triangle'],
                    correctIndex: 0
                },
                {
                    question: 'Which unit is used?',
                    options: ['Units of length', 'Units of area', 'Degrees', 'Radians'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Quadratic Formula',
            definition: '(-b ± √(b² - 4ac)) / 2a',
            tags: ['Algebra', 'Equations'],
            difficulty: 'hard',
            description: 'Solves quadratic equations of form ax²+bx+c=0...',
            questions: [{
                    question: 'What is the discriminant?',
                    options: ['b² - 4ac', '2a', '√(b² - 4ac)', '-b'],
                    correctIndex: 0
                },
                {
                    question: 'How many real roots if discriminant < 0?',
                    options: ['0', '1', '2', 'Infinite'],
                    correctIndex: 0
                },
                {
                    question: 'Solve x² + 4x + 3 = 0',
                    options: ['x = -1, -3', 'x = 1, 3', 'x = 2, 6', 'No solution'],
                    correctIndex: 0
                },
                {
                    question: 'What does "±" represent?',
                    options: ['Two solutions', 'One solution', 'Multiplication', 'Division'],
                    correctIndex: 0
                },
                {
                    question: 'What is "a" in 2x² + 5x + 3?',
                    options: ['2', '5', '3', 'x²'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Prime Numbers',
            definition: 'Numbers only divisible by 1 and themselves',
            tags: ['Number Theory'],
            difficulty: 'easy',
            description: 'Building blocks of all numbers...',
            questions: [{
                    question: 'Which is NOT prime?',
                    options: ['9', '2', '5', '7'],
                    correctIndex: 0
                },
                {
                    question: 'Smallest prime number?',
                    options: ['2', '1', '3', '0'],
                    correctIndex: 0
                },
                {
                    question: 'Why isn’t 1 prime?',
                    options: ['Only one divisor', 'Historical convention', 'Too small', 'Both A and B'],
                    correctIndex: 3
                },
                {
                    question: 'Used in which field?',
                    options: ['Cryptography', 'Botany', 'Meteorology', 'Linguistics'],
                    correctIndex: 0
                },
                {
                    question: 'Prime factors of 28?',
                    options: ['2² × 7', '3 × 9', '4 × 7', '1 × 28'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Area of Circle',
            definition: 'π × r²',
            tags: ['Geometry'],
            difficulty: 'easy',
            description: 'π (pi) is the ratio of circumference to diameter...',
            questions: [{
                    question: 'What is the area if r=3?',
                    options: ['9π', '6π', '3π', 'π/3'],
                    correctIndex: 0
                },
                {
                    question: 'What does π represent?',
                    options: ['Circumference/diameter ratio', 'Radius/diameter ratio', 'Area/diameter ratio', 'Volume/radius ratio'],
                    correctIndex: 0
                },
                {
                    question: 'Which shape uses this formula?',
                    options: ['Circle', 'Square', 'Cylinder', 'Sphere'],
                    correctIndex: 0
                },
                {
                    question: 'What unit is used?',
                    options: ['Square units (e.g., m²)', 'Cubic units', 'Linear units', 'Degrees'],
                    correctIndex: 0
                },
                {
                    question: 'What is the area of a circle with diameter 4?',
                    options: ['4π', '8π', '16π', '2π'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Derivative',
            definition: 'Instantaneous rate of change of a function',
            tags: ['Calculus'],
            difficulty: 'hard',
            description: 'Measures how a function changes as input changes...',
            questions: [{
                    question: 'What is the derivative of x²?',
                    options: ['2x', 'x', '2', 'x³/3'],
                    correctIndex: 0
                },
                {
                    question: 'What does the derivative represent graphically?',
                    options: ['Slope of tangent line', 'Area under curve', 'Y-intercept', 'Curvature'],
                    correctIndex: 0
                },
                {
                    question: 'Which rule is used for d/dx(sin(x))?',
                    options: ['Derivative of sin(x) = cos(x)', 'Product rule', 'Chain rule', 'Quotient rule'],
                    correctIndex: 0
                },
                {
                    question: 'What is f’(x) if f(x) = 5?',
                    options: ['0', '5', '5x', 'Undefined'],
                    correctIndex: 0
                },
                {
                    question: 'What is acceleration the derivative of?',
                    options: ['Velocity', 'Position', 'Jerk', 'Distance'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Integral',
            definition: 'Area under a curve or accumulation of quantities',
            tags: ['Calculus'],
            difficulty: 'hard',
            description: 'Reverse operation of derivative...',
            questions: [{
                    question: 'What is ∫2x dx?',
                    options: ['x² + C', '2x² + C', '2 + C', 'x + C'],
                    correctIndex: 0
                },
                {
                    question: 'What does ∫₀² x dx equal?',
                    options: ['2', '1', '4', '0'],
                    correctIndex: 0
                },
                {
                    question: 'Which method approximates integrals?',
                    options: ['Riemann sums', 'Pythagorean theorem', 'Quadratic formula', 'Derivative rules'],
                    correctIndex: 0
                },
                {
                    question: 'What is the integral of cos(x)?',
                    options: ['sin(x) + C', '-sin(x) + C', 'cos(x) + C', '-cos(x) + C'],
                    correctIndex: 0
                },
                {
                    question: 'What does the definite integral ∫ₐᵇ f(x)dx represent?',
                    options: ['Net area under f(x) from a to b', 'Slope at x=a', 'Average value', 'Derivative at x=b'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Binomial Theorem',
            definition: '(x + y)ⁿ = Σ (n choose k) xⁿ⁻ᵏyᵏ',
            tags: ['Algebra'],
            difficulty: 'medium',
            description: 'Expands powers of binomials...',
            questions: [{
                    question: 'Expand (x + y)²',
                    options: ['x² + 2xy + y²', 'x² + xy + y²', 'x² + y²', '2x + 2y'],
                    correctIndex: 0
                },
                {
                    question: 'What is the coefficient of x³y² in (x + y)^5?',
                    options: ['10', '5', '20', '1'],
                    correctIndex: 0
                },
                {
                    question: 'Which triangle gives binomial coefficients?',
                    options: ['Pascal’s Triangle', 'Fibonacci Sequence', 'Sierpinski Triangle', 'Golden Triangle'],
                    correctIndex: 0
                },
                {
                    question: 'What is (n choose k) equal to?',
                    options: ['n!/(k!(n-k)!)', 'n!/k!', 'k!/(n!(n-k)!)', 'n/k'],
                    correctIndex: 0
                },
                {
                    question: 'What is the expansion of (1 + 1)^n?',
                    options: ['2ⁿ', '1ⁿ', 'n²', 'n'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Logarithm',
            definition: 'Inverse of exponentiation: logₐ(b) = c means aᶜ = b',
            tags: ['Algebra'],
            difficulty: 'medium',
            description: 'Transforms multiplicative relationships into additive ones...',
            questions: [{
                    question: 'What is log₁₀(100)?',
                    options: ['2', '10', '1', '0'],
                    correctIndex: 0
                },
                {
                    question: 'What is ln(e³)?',
                    options: ['3', 'e³', '1', '0'],
                    correctIndex: 0
                },
                {
                    question: 'Which property is log(ab) = log(a) + log(b)?',
                    options: ['Product rule', 'Quotient rule', 'Power rule', 'Change of base'],
                    correctIndex: 0
                },
                {
                    question: 'What is log₂(8)?',
                    options: ['3', '2', '4', '1'],
                    correctIndex: 0
                },
                {
                    question: 'Which pH corresponds to [H⁺]=1e-7?',
                    options: ['7', '1', '14', '-7'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Matrix',
            definition: 'Rectangular array of numbers arranged in rows and columns',
            tags: ['Linear Algebra'],
            difficulty: 'medium',
            description: 'Represents linear transformations...',
            questions: [{
                    question: 'What is the dimension of a 2x3 matrix?',
                    options: ['2 rows, 3 columns', '3 rows, 2 columns', '6 elements', 'Square matrix'],
                    correctIndex: 0
                },
                {
                    question: 'What is the result of matrix multiplication for A(2x3) and B(3x2)?',
                    options: ['2x2 matrix', '3x3 matrix', '2x3 matrix', 'Undefined'],
                    correctIndex: 0
                },
                {
                    question: 'What is the identity matrix?',
                    options: ['Diagonal 1s, others 0', 'All 1s', 'All 0s', 'Random numbers'],
                    correctIndex: 0
                },
                {
                    question: 'What is the determinant of [[a,b],[c,d]]?',
                    options: ['ad - bc', 'a + d', 'ab + cd', 'ac - bd'],
                    correctIndex: 0
                },
                {
                    question: 'Which operation is NOT defined for matrices?',
                    options: ['Division', 'Addition', 'Multiplication', 'Transpose'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Fibonacci Sequence',
            definition: 'Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8...',
            tags: ['Number Theory'],
            difficulty: 'easy',
            description: 'Appears in nature...',
            questions: [{
                    question: 'What is the 5th term (0-indexed)?',
                    options: ['3', '2', '5', '1'],
                    correctIndex: 0
                },
                {
                    question: 'What is F₆?',
                    options: ['8', '5', '13', '21'],
                    correctIndex: 0
                },
                {
                    question: 'What ratio does Fibonacci approach?',
                    options: ['Golden ratio (φ)', 'π', '√2', 'Euler’s number'],
                    correctIndex: 0
                },
                {
                    question: 'Where does Fibonacci appear?',
                    options: ['Sunflower seeds', 'Atoms', 'Planetary orbits', 'Sound waves'],
                    correctIndex: 0
                },
                {
                    question: 'What is Fₙ = Fₙ₋₁ + ...?',
                    options: ['Fₙ₋₂', 'Fₙ₊₁', '2Fₙ₋₁', 'Fₙ₋₃'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Euler\'s Identity',
            definition: 'e^(iπ) + 1 = 0',
            tags: ['Complex Analysis'],
            difficulty: 'hard',
            description: 'Connects 5 fundamental constants...',
            questions: [{
                    question: 'How many fundamental constants are in Euler’s Identity?',
                    options: ['5', '3', '4', '6'],
                    correctIndex: 0
                },
                {
                    question: 'Which formula generalizes Euler’s Identity?',
                    options: ['e^(iθ) = cosθ + isinθ', 'F=ma', 'a² + b² = c²', 'E=mc²'],
                    correctIndex: 0
                },
                {
                    question: 'What is e^(iπ/2)?',
                    options: ['i', '-1', '1', '0'],
                    correctIndex: 0
                },
                {
                    question: 'Which constant is NOT in the identity?',
                    options: ['φ (golden ratio)', 'e', 'π', '0'],
                    correctIndex: 0
                },
                {
                    question: 'What field of math does this belong to?',
                    options: ['Complex analysis', 'Number theory', 'Geometry', 'Topology'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Mean Value Theorem',
            definition: 'If f is continuous on [a,b] and differentiable on (a,b), then ∃c∈(a,b) where f\'(c) = (f(b)-f(a))/(b-a)',
            tags: ['Calculus'],
            difficulty: 'medium',
            description: 'Guarantees a point where instantaneous rate equals average rate...',
            questions: [{
                    question: 'What does the theorem guarantee?',
                    options: ['A point c with f’(c) = average rate', 'Maximum value', 'Minimum value', 'Inflection point'],
                    correctIndex: 0
                },
                {
                    question: 'Which condition is NOT required?',
                    options: ['f is constant', 'f is continuous on [a,b]', 'f is differentiable on (a,b)', 'f(a) ≠ f(b)'],
                    correctIndex: 0
                },
                {
                    question: 'What is the geometric interpretation?',
                    options: ['Tangent parallel to secant line', 'Area under curve', 'Slope at midpoint', 'Curvature'],
                    correctIndex: 0
                },
                {
                    question: 'Does it apply to f(x)=|x| on [-1,1]?',
                    options: ['No (not differentiable at 0)', 'Yes', 'Only if x>0', 'Undefined'],
                    correctIndex: 0
                },
                {
                    question: 'What theorem is this a special case of?',
                    options: ['Rolle’s Theorem', 'Intermediate Value Theorem', 'Fundamental Theorem', 'Taylor’s Theorem'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Commutative Property',
            definition: 'a + b = b + a and a × b = b × a',
            tags: ['Algebra'],
            difficulty: 'easy',
            description: 'Order doesn’t matter for addition/multiplication...',
            questions: [{
                    question: 'Which operation is commutative?',
                    options: ['Addition', 'Subtraction', 'Division', 'Matrix multiplication'],
                    correctIndex: 0
                },
                {
                    question: 'Is 3 × 5 = 5 × 3?',
                    options: ['Yes', 'No', 'Only for even numbers', 'Only in algebra'],
                    correctIndex: 0
                },
                {
                    question: 'What is an example of non-commutative?',
                    options: ['Matrix multiplication', 'Addition', 'Multiplication', 'Scalar addition'],
                    correctIndex: 0
                },
                {
                    question: 'Does commutativity apply to vectors?',
                    options: ['No for cross product', 'Yes for dot product', 'Always', 'Never'],
                    correctIndex: 0
                },
                {
                    question: 'Which pair is commutative?',
                    options: ['7 + 4 and 4 + 7', '10 - 2 and 2 - 10', '6 ÷ 3 and 3 ÷ 6', 'All of the above'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Associative Property',
            definition: '(a + b) + c = a + (b + c) and (a × b) × c = a × (b × c)',
            tags: ['Algebra'],
            difficulty: 'easy',
            description: 'Grouping doesn’t affect addition/multiplication...',
            questions: [{
                    question: 'Which operation is associative?',
                    options: ['Addition', 'Subtraction', 'Division', 'Exponentiation'],
                    correctIndex: 0
                },
                {
                    question: 'Is (2 + 3) + 4 = 2 + (3 + 4)?',
                    options: ['Yes', 'No', 'Only for even numbers', 'Only in geometry'],
                    correctIndex: 0
                },
                {
                    question: 'What is an example of non-associative?',
                    options: ['Subtraction', 'Addition', 'Multiplication', 'Scalar addition'],
                    correctIndex: 0
                },
                {
                    question: 'Does associativity apply to vectors?',
                    options: ['Yes for addition', 'No for cross product', 'Always', 'Never'],
                    correctIndex: 0
                },
                {
                    question: 'Which pair is associative?',
                    options: ['(5 × 2) × 3 and 5 × (2 × 3)', '(10 - 5) - 2 and 10 - (5 - 2)', '(8 ÷ 4) ÷ 2 and 8 ÷ (4 ÷ 2)', 'All of the above'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Distributive Property',
            definition: 'a × (b + c) = (a × b) + (a × c)',
            tags: ['Algebra'],
            difficulty: 'easy',
            description: 'Links addition and multiplication...',
            questions: [{
                    question: 'What is 3 × (2 + 5)?',
                    options: ['21', '10', '15', '6'],
                    correctIndex: 0
                },
                {
                    question: 'Which operation is distributed?',
                    options: ['Multiplication over addition', 'Addition over multiplication', 'Subtraction over division', 'Exponentiation'],
                    correctIndex: 0
                },
                {
                    question: 'Simplify 4(x + y)',
                    options: ['4x + 4y', '4x + y', 'x + 4y', '4xy'],
                    correctIndex: 0
                },
                {
                    question: 'Does it apply to matrices?',
                    options: ['Yes for A(B + C)', 'No', 'Only for square matrices', 'Only for vectors'],
                    correctIndex: 0
                },
                {
                    question: 'What is 2 × (3 + 4) equal to?',
                    options: ['14', '10', '24', '7'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Complex Numbers',
            definition: 'Numbers in the form a + bi where i² = -1',
            tags: ['Algebra'],
            difficulty: 'medium',
            description: 'Extend real numbers with imaginary unit i...',
            questions: [{
                    question: 'What is i²?',
                    options: ['-1', '1', '0', 'Undefined'],
                    correctIndex: 0
                },
                {
                    question: 'What is (3 + 2i) + (1 - 4i)?',
                    options: ['4 - 2i', '3 - 2i', '4 + 6i', '2 + 2i'],
                    correctIndex: 0
                },
                {
                    question: 'What is the conjugate of 5 - 3i?',
                    options: ['5 + 3i', '-5 - 3i', '5 - 3i', '-5 + 3i'],
                    correctIndex: 0
                },
                {
                    question: 'Where are complex numbers used?',
                    options: ['Electrical engineering', 'Botany', 'Geology', 'Linguistics'],
                    correctIndex: 0
                },
                {
                    question: 'What is |3 + 4i|?',
                    options: ['5', '7', '3', '4'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Trigonometric Identities',
            definition: 'sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, etc.',
            tags: ['Trigonometry'],
            difficulty: 'medium',
            description: 'Relationships between trig functions...',
            questions: [{
                    question: 'What identity is sin²θ + cos²θ = 1?',
                    options: ['Pythagorean identity', 'Reciprocal identity', 'Quotient identity', 'Double-angle identity'],
                    correctIndex: 0
                },
                {
                    question: 'Simplify 1 - cos²θ',
                    options: ['sin²θ', 'tan²θ', 'sec²θ', 'cot²θ'],
                    correctIndex: 0
                },
                {
                    question: 'What is sin(π/2 - θ)?',
                    options: ['cosθ', 'sinθ', 'tanθ', 'cotθ'],
                    correctIndex: 0
                },
                {
                    question: 'Which identity is 1 + tan²θ = sec²θ?',
                    options: ['Pythagorean identity', 'Reciprocal identity', 'Co-function identity', 'Even-odd identity'],
                    correctIndex: 0
                },
                {
                    question: 'What is cos(-θ)?',
                    options: ['cosθ', '-cosθ', 'sinθ', '-sinθ'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Law of Cosines',
            definition: 'c² = a² + b² - 2ab cos(C)',
            tags: ['Trigonometry'],
            difficulty: 'medium',
            description: 'Generalization of Pythagorean theorem...',
            questions: [{
                    question: 'When does this law reduce to Pythagoras?',
                    options: ['When angle C is 90°', 'When angle C is 0°', 'When a = b', 'Never'],
                    correctIndex: 0
                },
                {
                    question: 'Find c if a=5, b=7, angle C=60°',
                    options: ['√(25 + 49 - 35)', '√(25 + 49 + 35)', '25 + 49', '5 + 7'],
                    correctIndex: 0
                },
                {
                    question: 'What is the law used for?',
                    options: ['Solving SAS triangles', 'Solving right triangles', 'Finding area', 'Calculating slope'],
                    correctIndex: 0
                },
                {
                    question: 'Which term adjusts for the angle?',
                    options: ['-2ab cos(C)', '+2ab cos(C)', '-ab sin(C)', '+ab tan(C)'],
                    correctIndex: 0
                },
                {
                    question: 'What is c² if angle C=0°?',
                    options: ['(a - b)²', '(a + b)²', 'a² + b²', 'ab'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Law of Sines',
            definition: 'a/sin(A) = b/sin(B) = c/sin(C)',
            tags: ['Trigonometry'],
            difficulty: 'medium',
            description: 'Relates side lengths to sines of opposite angles...',
            questions: [{
                    question: 'What triangle case uses this law?',
                    options: ['AAS or ASA', 'SSS', 'SAS', 'Right triangles'],
                    correctIndex: 0
                },
                {
                    question: 'If angle A=30°, side a=5, find side b if angle B=60°',
                    options: ['5√3', '5/√3', '10', '5'],
                    correctIndex: 0
                },
                {
                    question: 'What is ambiguous with this law?',
                    options: ['SSA case', 'ASA case', 'SAS case', 'AAS case'],
                    correctIndex: 0
                },
                {
                    question: 'What is the ratio a/sin(A) equal to?',
                    options: ['2R (circumradius)', 'R/2', 'Area', 'Perimeter'],
                    correctIndex: 0
                },
                {
                    question: 'Can it solve right triangles?',
                    options: ['Yes', 'No', 'Only if angles are acute', 'Only if angles are obtuse'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Fundamental Theorem of Calculus',
            definition: '∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f',
            tags: ['Calculus'],
            difficulty: 'hard',
            description: 'Links differentiation and integration...',
            questions: [{
                    question: 'What does Part 1 state?',
                    options: ['d/dx ∫ₐˣ f(t)dt = f(x)', '∫ₐᵇ f(x)dx = F(b) - F(a)', 'Derivative of F is f', 'All of the above'],
                    correctIndex: 0
                },
                {
                    question: 'Evaluate ∫₀¹ 2x dx using FTC',
                    options: ['1', '0', '2', '1/2'],
                    correctIndex: 0
                },
                {
                    question: 'What is F(x) if f(x)=3x²?',
                    options: ['x³ + C', '6x + C', '3x + C', 'x² + C'],
                    correctIndex: 0
                },
                {
                    question: 'Which theorem connects derivatives and integrals?',
                    options: ['FTC', 'Mean Value Theorem', 'Rolle’s Theorem', 'Intermediate Value Theorem'],
                    correctIndex: 0
                },
                {
                    question: 'What is d/dx ∫ₓ²³ sin(t)dt?',
                    options: ['sin(23) - sin(x²)', 'sin(23)', 'sin(x²)', 'cos(23) - cos(x²)'],
                    correctIndex: 0
                }
            ]
        }
    ],
    science: [{
            title: 'Photosynthesis',
            definition: 'Plants use sunlight to synthesize foods from CO₂ and water',
            tags: ['Biology'],
            difficulty: 'medium',
            description: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂...',
            questions: [{
                    question: 'What are the primary products of photosynthesis?',
                    options: ['Glucose and oxygen', 'Carbon dioxide and water', 'ATP and nitrogen', 'Starch and methane'],
                    correctIndex: 0
                },
                {
                    question: 'Where in plant cells does photosynthesis occur?',
                    options: ['Chloroplasts', 'Mitochondria', 'Nucleus', 'Ribosomes'],
                    correctIndex: 0
                },
                {
                    question: 'Which pigment absorbs light energy?',
                    options: ['Chlorophyll', 'Melanin', 'Hemoglobin', 'Keratin'],
                    correctIndex: 0
                },
                {
                    question: 'What gas is released during photosynthesis?',
                    options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
                    correctIndex: 0
                },
                {
                    question: 'What is NOT required for photosynthesis?',
                    options: ['Oxygen', 'Sunlight', 'Water', 'Carbon dioxide'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: "Newton's First Law",
            definition: 'An object remains at rest or in uniform motion unless acted upon by an external force',
            tags: ['Physics'],
            difficulty: 'easy',
            description: 'Law of inertia...',
            questions: [{
                    question: 'What does Newton’s First Law describe?',
                    options: ['Inertia', 'Gravity', 'Energy conservation', 'Friction'],
                    correctIndex: 0
                },
                {
                    question: 'Why do passengers jerk forward when a car stops suddenly?',
                    options: ['Inertia maintains their motion', 'Gravity increases', 'Seatbelt failure', 'Momentum reversal'],
                    correctIndex: 0
                },
                {
                    question: 'What is the "natural state" of motion?',
                    options: ['Constant velocity', 'Acceleration', 'At rest', 'Circular motion'],
                    correctIndex: 0
                },
                {
                    question: 'Which force violates the law’s condition?',
                    options: ['Unbalanced force', 'Balanced force', 'Tension', 'Normal force'],
                    correctIndex: 0
                },
                {
                    question: 'What is another name for this law?',
                    options: ['Law of Inertia', 'Law of Acceleration', 'Law of Gravity', 'Law of Energy'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Periodic Table',
            definition: 'Tabular arrangement of chemical elements ordered by atomic number',
            tags: ['Chemistry'],
            difficulty: 'hard',
            description: 'Groups show similar valence electron configurations...',
            questions: [{
                    question: 'How are elements ordered in the periodic table?',
                    options: ['Atomic number', 'Atomic mass', 'Density', 'Symbol'],
                    correctIndex: 0
                },
                {
                    question: 'Which group contains noble gases?',
                    options: ['Group 18', 'Group 1', 'Group 2', 'Group 17'],
                    correctIndex: 0
                },
                {
                    question: 'What trend increases across a period?',
                    options: ['Electronegativity', 'Atomic radius', 'Metallic character', 'Ion size'],
                    correctIndex: 0
                },
                {
                    question: 'Who developed the first periodic table?',
                    options: ['Dmitri Mendeleev', 'Isaac Newton', 'Marie Curie', 'Albert Einstein'],
                    correctIndex: 0
                },
                {
                    question: 'What do periods represent?',
                    options: ['Electron shells', 'Atomic weight', 'Density', 'Reactivity'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Cell Theory',
            definition: 'All living organisms are composed of cells, the basic unit of life',
            tags: ['Biology'],
            difficulty: 'easy',
            description: 'Three principles: 1) All organisms made of cells...',
            questions: [{
                    question: 'Which is NOT a principle of cell theory?',
                    options: ['All cells have nuclei', 'Cells arise from pre-existing cells', 'Cells are basic life units', 'All organisms are made of cells'],
                    correctIndex: 0
                },
                {
                    question: 'Who co-founded cell theory?',
                    options: ['Schleiden and Schwann', 'Darwin and Wallace', 'Watson and Crick', 'Einstein and Newton'],
                    correctIndex: 0
                },
                {
                    question: 'What tool confirmed cell theory?',
                    options: ['Microscope', 'Telescope', 'Spectroscope', 'Barometer'],
                    correctIndex: 0
                },
                {
                    question: 'Which organism violates cell theory?',
                    options: ['Viruses', 'Bacteria', 'Plants', 'Animals'],
                    correctIndex: 0
                },
                {
                    question: 'What is the smallest unit of life?',
                    options: ['Cell', 'Atom', 'Molecule', 'Organ'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'DNA Structure',
            definition: 'Double helix composed of nucleotides with base pairs A-T and C-G',
            tags: ['Biology'],
            difficulty: 'medium',
            description: 'Antiparallel strands with sugar-phosphate backbone...',
            questions: [{
                    question: 'What holds DNA strands together?',
                    options: ['Hydrogen bonds', 'Covalent bonds', 'Ionic bonds', 'Metallic bonds'],
                    correctIndex: 0
                },
                {
                    question: 'Which pair is correct?',
                    options: ['A-T', 'A-G', 'C-T', 'G-A'],
                    correctIndex: 0
                },
                {
                    question: 'Who discovered the DNA structure?',
                    options: ['Watson and Crick', 'Darwin and Mendel', 'Newton and Einstein', 'Curie and Pasteur'],
                    correctIndex: 0
                },
                {
                    question: 'What is DNA’s primary function?',
                    options: ['Store genetic information', 'Produce energy', 'Build proteins directly', 'Transport oxygen'],
                    correctIndex: 0
                },
                {
                    question: 'Which sugar is in DNA?',
                    options: ['Deoxyribose', 'Ribose', 'Glucose', 'Fructose'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Thermodynamics Laws',
            definition: '1: Energy conserved; 2: Entropy increases; 3: Absolute zero unattainable',
            tags: ['Physics'],
            difficulty: 'hard',
            description: '1st: Energy transformation. 2nd: Spontaneous processes...',
            questions: [{
                    question: 'What does the First Law state?',
                    options: ['Energy cannot be created/destroyed', 'Entropy always increases', 'Absolute zero is unattainable', 'Heat flows from cold to hot'],
                    correctIndex: 0
                },
                {
                    question: 'Which law explains perpetual motion machines are impossible?',
                    options: ['Second Law', 'First Law', 'Third Law', 'Zeroth Law'],
                    correctIndex: 0
                },
                {
                    question: 'What is entropy?',
                    options: ['Measure of disorder', 'Energy transfer', 'Temperature scale', 'Pressure difference'],
                    correctIndex: 0
                },
                {
                    question: 'What happens at absolute zero (Third Law)?',
                    options: ['Entropy approaches zero', 'Entropy peaks', 'Energy is destroyed', 'Molecules stop moving'],
                    correctIndex: 0
                },
                {
                    question: 'Which device violates the Second Law?',
                    options: ['Perpetual motion machine', 'Heat engine', 'Refrigerator', 'Solar panel'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Evolution by Natural Selection',
            definition: 'Process where organisms better adapted to environment tend to survive',
            tags: ['Biology'],
            difficulty: 'medium',
            description: 'Darwin/Wallace theory...',
            questions: [{
                    question: 'What is required for natural selection?',
                    options: ['Variation, inheritance, differential reproduction', 'Random mutations only', 'Divine intervention', 'Climate change'],
                    correctIndex: 0
                },
                {
                    question: 'Which example illustrates natural selection?',
                    options: ['Peppered moths during industrialization', 'Giraffes stretching necks', 'Lamarck’s acquired traits', 'Volcanic eruptions'],
                    correctIndex: 0
                },
                {
                    question: 'What is a mutation?',
                    options: ['Random genetic change', 'Planned adaptation', 'Environmental pressure', 'Selective breeding'],
                    correctIndex: 0
                },
                {
                    question: 'Who co-discovered natural selection?',
                    options: ['Alfred Russel Wallace', 'Gregor Mendel', 'Louis Pasteur', 'Carl Linnaeus'],
                    correctIndex: 0
                },
                {
                    question: 'What is fitness in evolutionary terms?',
                    options: ['Reproductive success', 'Physical strength', 'Lifespan', 'Speed'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Electromagnetic Spectrum',
            definition: 'Range of all types of EM radiation from radio waves to gamma rays',
            tags: ['Physics'],
            difficulty: 'medium',
            description: 'Ordered by wavelength/frequency...',
            questions: [{
                    question: 'Which has the longest wavelength?',
                    options: ['Radio waves', 'X-rays', 'Visible light', 'Gamma rays'],
                    correctIndex: 0
                },
                {
                    question: 'What type of EM radiation is visible to humans?',
                    options: ['400-700 nm', 'Microwaves', 'UV rays', 'Infrared'],
                    correctIndex: 0
                },
                {
                    question: 'Which is ionizing radiation?',
                    options: ['Gamma rays', 'Radio waves', 'Microwaves', 'Infrared'],
                    correctIndex: 0
                },
                {
                    question: 'What is the speed of all EM radiation?',
                    options: ['Speed of light (c)', 'Varies by wavelength', 'Speed of sound', 'Zero in a vacuum'],
                    correctIndex: 0
                },
                {
                    question: 'Which EM type is used in WiFi?',
                    options: ['Radio waves', 'X-rays', 'UV light', 'Gamma rays'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Chemical Bonds',
            definition: 'Ionic (electron transfer), covalent (electron sharing), metallic',
            tags: ['Chemistry'],
            difficulty: 'medium',
            description: 'Ionic: metal + nonmetal (NaCl). Covalent: nonmetals (H₂O)...',
            questions: [{
                    question: 'What bond forms between Na and Cl?',
                    options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'],
                    correctIndex: 0
                },
                {
                    question: 'Which bond involves shared electrons?',
                    options: ['Covalent', 'Ionic', 'Metallic', 'Van der Waals'],
                    correctIndex: 0
                },
                {
                    question: 'What holds H₂O molecules together?',
                    options: ['Hydrogen bonds', 'Covalent bonds', 'Ionic bonds', 'Metallic bonds'],
                    correctIndex: 0
                },
                {
                    question: 'Which is a property of metallic bonds?',
                    options: ['Electrical conductivity', 'Brittleness', 'Low melting point', 'Non-shiny'],
                    correctIndex: 0
                },
                {
                    question: 'What bond is strongest?',
                    options: ['Covalent', 'Ionic', 'Hydrogen', 'Van der Waals'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Mitosis vs Meiosis',
            definition: 'Mitosis: identical cells; Meiosis: gametes with half chromosomes',
            tags: ['Biology'],
            difficulty: 'medium',
            description: 'Mitosis: 1 division → 2 diploid cells...',
            questions: [{
                    question: 'How many divisions occur in meiosis?',
                    options: ['2', '1', '3', '4'],
                    correctIndex: 0
                },
                {
                    question: 'What is the result of mitosis?',
                    options: ['2 identical diploid cells', '4 haploid gametes', '1 diploid cell', '3 somatic cells'],
                    correctIndex: 0
                },
                {
                    question: 'When does crossing over occur?',
                    options: ['Prophase I of meiosis', 'Metaphase of mitosis', 'Telophase II', 'Anaphase I'],
                    correctIndex: 0
                },
                {
                    question: 'Which process creates genetic diversity?',
                    options: ['Meiosis', 'Mitosis', 'Binary fission', 'Cloning'],
                    correctIndex: 0
                },
                {
                    question: 'How many chromosomes do human gametes have?',
                    options: ['23', '46', '92', '12'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Quantum Mechanics Basics',
            definition: 'Particles exhibit wave-particle duality; quantum superposition',
            tags: ['Physics'],
            difficulty: 'hard',
            description: 'Quantized energy levels...',
            questions: [{
                    question: 'What is wave-particle duality?',
                    options: ['Particles act as waves and particles', 'Waves only exist in water', 'Particles are solid spheres', 'Waves are illusions'],
                    correctIndex: 0
                },
                {
                    question: 'What principle states you can’t know position and momentum simultaneously?',
                    options: ['Uncertainty Principle', 'Pauli Exclusion', 'Superposition', 'Correspondence'],
                    correctIndex: 0
                },
                {
                    question: 'Which equation describes quantum states?',
                    options: ['Schrödinger equation', 'Einstein’s E=mc²', 'Newton’s Second Law', 'Ohm’s Law'],
                    correctIndex: 0
                },
                {
                    question: 'What is quantum entanglement?',
                    options: ['Correlated states of particles', 'Particle decay', 'Energy quantization', 'Wave collapse'],
                    correctIndex: 0
                },
                {
                    question: 'Which experiment demonstrates superposition?',
                    options: ['Double-slit experiment', 'Michelson-Morley', 'Cathode ray tube', 'Geiger-Marsden'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Genotype vs Phenotype',
            definition: 'Genotype: genetic makeup; Phenotype: observable characteristics',
            tags: ['Biology'],
            difficulty: 'easy',
            description: 'Genotype (e.g., Bb) interacts with environment...',
            questions: [{
                    question: 'Which represents genotype?',
                    options: ['Bb', 'Brown eyes', 'Tall height', 'Curly hair'],
                    correctIndex: 0
                },
                {
                    question: 'What is an example of phenotype?',
                    options: ['Blue eyes', 'AA', 'Aa', 'aa'],
                    correctIndex: 0
                },
                {
                    question: 'Can two organisms with the same phenotype have different genotypes?',
                    options: ['Yes (e.g., BB vs Bb)', 'No', 'Only in plants', 'Only in animals'],
                    correctIndex: 0
                },
                {
                    question: 'What determines phenotype?',
                    options: ['Genotype and environment', 'Genotype only', 'Environment only', 'Random chance'],
                    correctIndex: 0
                },
                {
                    question: 'Which is homozygous dominant?',
                    options: ['BB', 'Bb', 'bb', 'BO'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Newton\'s Laws of Motion',
            definition: '1: Inertia; 2: F=ma; 3: Action-reaction pairs',
            tags: ['Physics'],
            difficulty: 'medium',
            description: '1st: Objects resist motion changes...',
            questions: [{
                    question: 'What is Newton’s Second Law?',
                    options: ['F = ma', 'For every action, a reaction', 'Objects maintain motion', 'Energy is conserved'],
                    correctIndex: 0
                },
                {
                    question: 'Which law explains rocket propulsion?',
                    options: ['Third Law', 'First Law', 'Second Law', 'Law of Gravity'],
                    correctIndex: 0
                },
                {
                    question: 'What is inertia?',
                    options: ['Resistance to motion change', 'Force of gravity', 'Energy in motion', 'Speed measurement'],
                    correctIndex: 0
                },
                {
                    question: 'If mass doubles and force stays the same, what happens to acceleration?',
                    options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'],
                    correctIndex: 0
                },
                {
                    question: 'Which is an action-reaction pair?',
                    options: ['Foot pushes ground; ground pushes foot', 'Book on table; table breaks', 'Car accelerates; passenger leans back', 'All of the above'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'pH Scale',
            definition: 'Measures acidity (0-7) and alkalinity (7-14) of solutions',
            tags: ['Chemistry'],
            difficulty: 'easy',
            description: 'pH = -log[H⁺]...',
            questions: [{
                    question: 'What is the pH of pure water?',
                    options: ['7', '0', '14', '3'],
                    correctIndex: 0
                },
                {
                    question: 'Which is acidic?',
                    options: ['pH 3', 'pH 9', 'pH 7', 'pH 13'],
                    correctIndex: 0
                },
                {
                    question: 'What does a low pH indicate?',
                    options: ['High [H⁺]', 'Low [H⁺]', 'High [OH⁻]', 'Neutral solution'],
                    correctIndex: 0
                },
                {
                    question: 'Which substance is alkaline?',
                    options: ['Bleach (pH 12)', 'Lemon juice (pH 2)', 'Water (pH 7)', 'Coffee (pH 5)'],
                    correctIndex: 0
                },
                {
                    question: 'What is the pH of a 0.1M HCl solution?',
                    options: ['1', '7', '13', '0.1'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Osmosis',
            definition: 'Movement of water through semipermeable membrane from low to high solute concentration',
            tags: ['Biology'],
            difficulty: 'medium',
            description: 'Passive transport...',
            questions: [{
                    question: 'What drives osmosis?',
                    options: ['Concentration gradient', 'ATP energy', 'Electrical charge', 'Light energy'],
                    correctIndex: 0
                },
                {
                    question: 'What happens to a cell in a hypertonic solution?',
                    options: ['Shrinks', 'Swells', 'Stays same', 'Bursts'],
                    correctIndex: 0
                },
                {
                    question: 'Which term describes equal solute concentration?',
                    options: ['Isotonic', 'Hypertonic', 'Hypotonic', 'Homeostatic'],
                    correctIndex: 0
                },
                {
                    question: 'Where does osmosis occur in the body?',
                    options: ['Kidneys', 'Lungs', 'Heart', 'Bones'],
                    correctIndex: 0
                },
                {
                    question: 'What is reverse osmosis?',
                    options: ['Forcing water against gradient', 'Passive diffusion', 'Active transport', 'Endocytosis'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Chemical Reactions',
            definition: 'Synthesis, decomposition, single/double replacement, combustion',
            tags: ['Chemistry'],
            difficulty: 'medium',
            description: 'Synthesis: A+B→AB...',
            questions: [{
                    question: 'What type is 2H₂ + O₂ → 2H₂O?',
                    options: ['Synthesis', 'Decomposition', 'Combustion', 'Single replacement'],
                    correctIndex: 0
                },
                {
                    question: 'What is the product of combustion?',
                    options: ['CO₂ and H₂O', 'O₂ and H₂', 'NaCl and H₂O', 'NH₃ and O₂'],
                    correctIndex: 0
                },
                {
                    question: 'Which reaction breaks compounds into simpler substances?',
                    options: ['Decomposition', 'Synthesis', 'Combustion', 'Double replacement'],
                    correctIndex: 0
                },
                {
                    question: 'What is the catalyst in many reactions?',
                    options: ['Enzymes', 'Water', 'Oxygen', 'Heat'],
                    correctIndex: 0
                },
                {
                    question: 'What is the balanced form of H₂ + O₂ → H₂O?',
                    options: ['2H₂ + O₂ → 2H₂O', 'H₂ + O₂ → H₂O', 'H₂ + 2O₂ → 2H₂O', 'H₂ + O₂ → 2H₂O'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Plate Tectonics',
            definition: 'Earth\'s lithosphere divided into plates that move over asthenosphere',
            tags: ['Geology'],
            difficulty: 'medium',
            description: 'Divergent (mid-ocean ridges)...',
            questions: [{
                    question: 'What causes tectonic plates to move?',
                    options: ['Convection currents', 'Gravitational pull', 'Solar radiation', 'Magnetic fields'],
                    correctIndex: 0
                },
                {
                    question: 'Which boundary creates mountains?',
                    options: ['Convergent', 'Divergent', 'Transform', 'Subductive'],
                    correctIndex: 0
                },
                {
                    question: 'What is formed at divergent boundaries?',
                    options: ['Mid-ocean ridges', 'Volcanoes', 'Earthquakes', 'Trenches'],
                    correctIndex: 0
                },
                {
                    question: 'Which phenomenon is caused by transform boundaries?',
                    options: ['Earthquakes', 'Volcanoes', 'Mountain ranges', 'Rift valleys'],
                    correctIndex: 0
                },
                {
                    question: 'What is the San Andreas Fault an example of?',
                    options: ['Transform boundary', 'Convergent boundary', 'Divergent boundary', 'Subduction zone'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Kepler\'s Laws',
            definition: '1: Elliptical orbits; 2: Equal areas in equal times; 3: T² ∝ a³',
            tags: ['Astronomy'],
            difficulty: 'hard',
            description: '1st: Planets orbit in ellipses...',
            questions: [{
                    question: 'Which law states planets sweep equal areas in equal times?',
                    options: ['Second Law', 'First Law', 'Third Law', 'Law of Gravity'],
                    correctIndex: 0
                },
                {
                    question: 'What does T² ∝ a³ describe?',
                    options: ['Orbital period vs semi-major axis', 'Planetary mass vs radius', 'Escape velocity vs gravity', 'Temperature vs distance'],
                    correctIndex: 0
                },
                {
                    question: 'Which shape describes planetary orbits?',
                    options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
                    correctIndex: 0
                },
                {
                    question: 'Who formulated these laws?',
                    options: ['Johannes Kepler', 'Isaac Newton', 'Galileo Galilei', 'Nicolaus Copernicus'],
                    correctIndex: 0
                },
                {
                    question: 'What is the focus of an elliptical orbit?',
                    options: ['Sun', 'Earth', 'Moon', 'Black hole'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Mendelian Inheritance',
            definition: 'Principles of dominant/recessive traits and genetic segregation',
            tags: ['Biology'],
            difficulty: 'medium',
            description: 'Gregor Mendel\'s pea plant experiments...',
            questions: [{
                    question: 'What is Mendel’s Law of Segregation?',
                    options: ['Allele pairs separate during gamete formation', 'Traits blend in offspring', 'Genes are linked', 'Chromosomes mutate'],
                    correctIndex: 0
                },
                {
                    question: 'A homozygous dominant (AA) crossed with homozygous recessive (aa) produces:',
                    options: ['100% Aa', '50% AA, 50% aa', '25% AA, 50% Aa, 25% aa', '75% Aa, 25% aa'],
                    correctIndex: 0
                },
                {
                    question: 'What is a recessive trait?',
                    options: ['Only shows if homozygous', 'Always shows', 'Blends with dominant', 'Skips generations'],
                    correctIndex: 0
                },
                {
                    question: 'Which ratio did Mendel observe in F2 generations?',
                    options: ['3:1', '1:1', '9:3:3:1', '1:2:1'],
                    correctIndex: 0
                },
                {
                    question: 'What organism did Mendel study?',
                    options: ['Pea plants', 'Fruit flies', 'Mice', 'Bacteria'],
                    correctIndex: 0
                }
            ]
        },
        {
            title: 'Entropy',
            definition: 'Measure of disorder in a system; always increases in closed systems',
            tags: ['Physics'],
            difficulty: 'hard',
            description: 'Thermodynamic quantity (S)...',
            questions: [{
                    question: 'What does the Second Law of Thermodynamics state?',
                    options: ['Entropy increases', 'Energy is conserved', 'Absolute zero is unattainable', 'Heat flows cold→hot'],
                    correctIndex: 0
                },
                {
                    question: 'Which system has higher entropy?',
                    options: ['Gas', 'Liquid', 'Solid', 'Plasma'],
                    correctIndex: 0
                },
                {
                    question: 'What is entropy’s unit?',
                    options: ['J/K', 'J', 'W', 'N/m²'],
                    correctIndex: 0
                },
                {
                    question: 'Which process decreases entropy locally?',
                    options: ['Forming a crystal', 'Melting ice', 'Burning wood', 'Mixing gases'],
                    correctIndex: 0
                },
                {
                    question: 'What is Boltzmann’s formula for entropy?',
                    options: ['S = k ln Ω', 'E = mc²', 'F = ma', 'PV = nRT'],
                    correctIndex: 0
                }
            ]
        }
    ],
    "history": [{
            "title": "World War II",
            "definition": "Global conflict (1939-1945) between Allies and Axis powers",
            "tags": ["20th Century"],
            "difficulty": "medium",
            "description": "Key events: Pearl Harbor, D-Day, Holocaust, atomic bombs. Resulted in UN formation, Cold War, decolonization. 70-85 million fatalities.",
            "questions": [{
                    "question": "When did World War II begin?",
                    "options": ["1914", "1939", "1941", "1929"],
                    "correctIndex": 1
                },
                {
                    "question": "Which event prompted US entry into WWII?",
                    "options": ["D-Day", "Battle of Britain", "Pearl Harbor", "Invasion of Poland"],
                    "correctIndex": 2
                },
                {
                    "question": "What was the Holocaust?",
                    "options": ["Nuclear weapons program", "German blitzkrieg tactic", "Systematic genocide of Jews", "Allied invasion plan"],
                    "correctIndex": 2
                },
                {
                    "question": "Which cities were atomic bombed?",
                    "options": ["Tokyo & Kyoto", "Berlin & Munich", "Hiroshima & Nagasaki", "London & Paris"],
                    "correctIndex": 2
                },
                {
                    "question": "What organization formed after WWII?",
                    "options": ["League of Nations", "United Nations", "European Union", "NATO"],
                    "correctIndex": 1
                }
            ]
        },
        {
            "title": "Magna Carta",
            "definition": "1215 English charter limiting royal power and establishing legal principles",
            "tags": ["Law"],
            "difficulty": "hard",
            "description": "Forced on King John by barons. Established due process, habeas corpus. Foundation for constitutional law. Influenced US Bill of Rights.",
            "questions": [{
                    "question": "Which king was forced to sign Magna Carta?",
                    "options": ["Henry VIII", "Richard I", "John", "Edward I"],
                    "correctIndex": 2
                },
                {
                    "question": "What principle did Magna Carta establish?",
                    "options": ["Divine right of kings", "Due process of law", "Parliamentary democracy", "Universal suffrage"],
                    "correctIndex": 1
                },
                {
                    "question": "Which document was influenced by Magna Carta?",
                    "options": ["US Constitution", "Communist Manifesto", "Treaty of Versailles", "Code of Hammurabi"],
                    "correctIndex": 0
                },
                {
                    "question": "What does 'habeas corpus' protect?",
                    "options": ["Property rights", "Freedom from unlawful detention", "Right to bear arms", "Freedom of speech"],
                    "correctIndex": 1
                },
                {
                    "question": "Where was Magna Carta signed?",
                    "options": ["London", "Canterbury", "Runnymede", "York"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "French Revolution",
            "definition": "Period (1789-1799) of radical social and political change in France",
            "tags": ["Europe"],
            "difficulty": "easy",
            "description": "Storming of Bastille, Reign of Terror, rise of Napoleon. Motto: 'Liberty, Equality, Fraternity'. Ended feudalism, spread nationalism.",
            "questions": [{
                    "question": "What event began the French Revolution?",
                    "options": ["Execution of Louis XVI", "Storming of the Bastille", "March on Versailles", "Reign of Terror"],
                    "correctIndex": 1
                },
                {
                    "question": "What was the revolutionary motto?",
                    "options": ["Peace, Land, Bread", "Life, Liberty, Property", "Liberty, Equality, Fraternity", "Workers of the world unite"],
                    "correctIndex": 2
                },
                {
                    "question": "Which device was used for executions?",
                    "options": ["Iron Maiden", "Guillotine", "Gallows", "Firing squad"],
                    "correctIndex": 1
                },
                {
                    "question": "Who rose to power after the revolution?",
                    "options": ["Robespierre", "Napoleon", "Lafayette", "Louis XVIII"],
                    "correctIndex": 1
                },
                {
                    "question": "What estate led the revolution?",
                    "options": ["First Estate (clergy)", "Second Estate (nobility)", "Third Estate (commoners)", "Military"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Cold War",
            "definition": "Geopolitical tension (1947-1991) between US-led West and Soviet-led East",
            "tags": ["20th Century"],
            "difficulty": "medium",
            "description": "Proxy wars (Korea, Vietnam), arms race, space race. Ended with USSR collapse. Key events: Berlin Wall, Cuban Missile Crisis.",
            "questions": [{
                    "question": "Which event was NOT part of Cold War?",
                    "options": ["Cuban Missile Crisis", "Vietnam War", "Korean War", "World War I"],
                    "correctIndex": 3
                },
                {
                    "question": "What symbolized divided Europe?",
                    "options": ["Iron Curtain", "Berlin Wall", "Both", "Neither"],
                    "correctIndex": 2
                },
                {
                    "question": "What was the space race achievement?",
                    "options": ["Moon landing", "Hubble Telescope", "International Space Station", "Mars rover"],
                    "correctIndex": 0
                },
                {
                    "question": "Which policy aimed to stop communism's spread?",
                    "options": ["New Deal", "Containment", "Detente", "Glasnost"],
                    "correctIndex": 1
                },
                {
                    "question": "When did USSR dissolve?",
                    "options": ["1989", "1990", "1991", "1992"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Industrial Revolution",
            "definition": "Transition to new manufacturing processes (1760-1840)",
            "tags": ["Economics"],
            "difficulty": "medium",
            "description": "Steam engine, factories, urbanization. Began in Britain. Increased productivity but caused labor exploitation. Led to modern capitalism.",
            "questions": [{
                    "question": "Where did Industrial Revolution begin?",
                    "options": ["France", "Germany", "Britain", "USA"],
                    "correctIndex": 2
                },
                {
                    "question": "What was a key invention?",
                    "options": ["Steam engine", "Printing press", "Light bulb", "Telephone"],
                    "correctIndex": 0
                },
                {
                    "question": "What social change occurred?",
                    "options": ["Urbanization", "Feudalism strengthened", "Population decline", "Decreased trade"],
                    "correctIndex": 0
                },
                {
                    "question": "Which industry was first industrialized?",
                    "options": ["Steel", "Transportation", "Textiles", "Agriculture"],
                    "correctIndex": 2
                },
                {
                    "question": "What negative effect emerged?",
                    "options": ["Labor exploitation", "Overproduction", "Both", "Neither"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Renaissance",
            "definition": "Cultural rebirth in Europe (14th-17th centuries) emphasizing classical learning",
            "tags": ["Art"],
            "difficulty": "medium",
            "description": "Humanism, scientific inquiry, artistic masterpieces (Da Vinci, Michelangelo). Gutenberg press spread ideas. Transition from medieval to modern.",
            "questions": [{
                    "question": "What philosophy guided the Renaissance?",
                    "options": ["Humanism", "Scholasticism", "Existentialism", "Stoicism"],
                    "correctIndex": 0
                },
                {
                    "question": "Who painted the Sistine Chapel?",
                    "options": ["Da Vinci", "Michelangelo", "Raphael", "Donatello"],
                    "correctIndex": 1
                },
                {
                    "question": "What invention spread Renaissance ideas?",
                    "options": ["Steam engine", "Printing press", "Telescope", "Compass"],
                    "correctIndex": 1
                },
                {
                    "question": "Where did Renaissance begin?",
                    "options": ["France", "England", "Italy", "Germany"],
                    "correctIndex": 2
                },
                {
                    "question": "What was rediscovered during Renaissance?",
                    "options": ["Greek/Roman classics", "Egyptian hieroglyphs", "Chinese silk", "Native American cultures"],
                    "correctIndex": 0
                }
            ]
        },
        {
            "title": "American Revolution",
            "definition": "Colonial revolt (1765-1783) establishing United States independence",
            "tags": ["Politics"],
            "difficulty": "medium",
            "description": "Causes: taxation without representation. Key figures: Washington, Jefferson. Declaration (1776), Treaty of Paris (1783). Inspired other revolutions.",
            "questions": [{
                    "question": "What was the main colonial grievance?",
                    "options": ["Religious persecution", "Taxation without representation", "Land disputes", "Trade restrictions"],
                    "correctIndex": 1
                },
                {
                    "question": "When was Declaration of Independence signed?",
                    "options": ["1775", "1776", "1781", "1783"],
                    "correctIndex": 1
                },
                {
                    "question": "Who was commander of Continental Army?",
                    "options": ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"],
                    "correctIndex": 2
                },
                {
                    "question": "Which European country aided colonists?",
                    "options": ["Spain", "France", "Netherlands", "Portugal"],
                    "correctIndex": 1
                },
                {
                    "question": "What treaty ended the war?",
                    "options": ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of London"],
                    "correctIndex": 1
                }
            ]
        },
        {
            "title": "Roman Empire",
            "definition": "Ancient civilization centered in Rome (27 BC-476 AD)",
            "tags": ["Ancient History"],
            "difficulty": "easy",
            "description": "Pax Romana, engineering marvels (roads, aqueducts), Latin language. Split East/West. Fall contributed to Middle Ages. Lasting legal/governmental influence.",
            "questions": [{
                    "question": "Who was first Roman emperor?",
                    "options": ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                    "correctIndex": 1
                },
                {
                    "question": "What was 'Pax Romana'?",
                    "options": ["Roman navy", "Period of peace", "Tax system", "Religious festival"],
                    "correctIndex": 1
                },
                {
                    "question": "Which engineering feat did Romans master?",
                    "options": ["Aqueducts", "Steel production", "Gunpowder", "Paper making"],
                    "correctIndex": 0
                },
                {
                    "question": "When did Western Roman Empire fall?",
                    "options": ["1066 AD", "476 AD", "312 AD", "1453 AD"],
                    "correctIndex": 1
                },
                {
                    "question": "What language did Romans speak?",
                    "options": ["Greek", "Latin", "Aramaic", "Egyptian"],
                    "correctIndex": 1
                }
            ]
        },
        {
            "title": "Civil Rights Movement",
            "definition": "US social movement (1954-1968) to end racial segregation and discrimination",
            "tags": ["Social Justice"],
            "difficulty": "medium",
            "description": "Key events: Montgomery Bus Boycott, March on Washington, Civil Rights Act (1964). Leaders: MLK Jr., Rosa Parks. Ongoing impact on equality movements.",
            "questions": [{
                    "question": "Who refused to give up a bus seat in 1955?",
                    "options": ["Harriet Tubman", "Rosa Parks", "Sojourner Truth", "Fannie Lou Hamer"],
                    "correctIndex": 1
                },
                {
                    "question": "What was MLK's famous 1963 speech?",
                    "options": ["We Shall Overcome", "Ballot or the Bullet", "I Have a Dream", "Letter from Birmingham Jail"],
                    "correctIndex": 2
                },
                {
                    "question": "Which law ended segregation?",
                    "options": ["Civil Rights Act (1964)", "Voting Rights Act (1965)", "Both", "Neither"],
                    "correctIndex": 2
                },
                {
                    "question": "What protest tactic was common?",
                    "options": ["Violent uprisings", "Sit-ins", "Armed resistance", "Political lobbying"],
                    "correctIndex": 1
                },
                {
                    "question": "Who opposed civil rights?",
                    "options": ["KKK", "FBI", "Both", "Neither"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Age of Exploration",
            "definition": "Period (15th-17th centuries) of European global maritime exploration",
            "tags": ["Geography"],
            "difficulty": "easy",
            "description": "Columbus (1492), Magellan circumnavigation. Columbian Exchange transferred plants/animals/diseases. Led to colonialism and global trade networks.",
            "questions": [{
                    "question": "Who 'discovered' America in 1492?",
                    "options": ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"],
                    "correctIndex": 1
                },
                {
                    "question": "What was the Columbian Exchange?",
                    "options": ["Trade route to Asia", "Transfer of goods between hemispheres", "Stock market system", "Slave trade agreement"],
                    "correctIndex": 1
                },
                {
                    "question": "Which explorer circumnavigated the globe?",
                    "options": ["Columbus", "Magellan", "Cook", "Drake"],
                    "correctIndex": 1
                },
                {
                    "question": "What motivated exploration?",
                    "options": ["Gold, glory, God", "Scientific curiosity", "Population pressure", "Religious freedom"],
                    "correctIndex": 0
                },
                {
                    "question": "Which disease devastated Native Americans?",
                    "options": ["Malaria", "Influenza", "Smallpox", "Tuberculosis"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "World War I",
            "definition": "Global war (1914-1918) centered in Europe with trench warfare",
            "tags": ["20th Century"],
            "difficulty": "medium",
            "description": "Causes: alliances, militarism, assassination of Archduke Ferdinand. New weapons: tanks, poison gas. Treaty of Versailles planted WWII seeds.",
            "questions": [{
                    "question": "What triggered WWI?",
                    "options": ["Zimmerman Telegram", "Assassination of Archduke", "Invasion of Belgium", "Sinking of Lusitania"],
                    "correctIndex": 1
                },
                {
                    "question": "What was new warfare technology?",
                    "options": ["Poison gas", "Nuclear weapons", "Jet fighters", "Aircraft carriers"],
                    "correctIndex": 0
                },
                {
                    "question": "Which countries were Central Powers?",
                    "options": ["Germany, Austria-Hungary", "France, Russia", "Britain, US", "Italy, Japan"],
                    "correctIndex": 0
                },
                {
                    "question": "What characterized Western Front?",
                    "options": ["Trench warfare", "Naval battles", "Aerial dogfights", "Guerrilla tactics"],
                    "correctIndex": 0
                },
                {
                    "question": "What treaty ended WWI?",
                    "options": ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Tordesillas"],
                    "correctIndex": 1
                }
            ]
        },
        {
            "title": "Hellenistic Period",
            "definition": "Era (323-31 BC) of Greek cultural expansion after Alexander the Great",
            "tags": ["Ancient History"],
            "difficulty": "hard",
            "description": "Blend of Greek, Persian, Egyptian cultures. Centers: Alexandria, Antioch. Advances in math (Euclid), astronomy (Aristarchus' heliocentrism).",
            "questions": [{
                    "question": "Who spread Greek culture before this period?",
                    "options": ["Julius Caesar", "Alexander the Great", "Pericles", "Socrates"],
                    "correctIndex": 1
                },
                {
                    "question": "Where was the famous Library?",
                    "options": ["Athens", "Alexandria", "Rome", "Persepolis"],
                    "correctIndex": 1
                },
                {
                    "question": "Which mathematician was Hellenistic?",
                    "options": ["Pythagoras", "Euclid", "Both", "Neither"],
                    "correctIndex": 1
                },
                {
                    "question": "What ended Hellenistic Period?",
                    "options": ["Roman conquest", "Persian invasion", "Christianization", "Barbarian migrations"],
                    "correctIndex": 0
                },
                {
                    "question": "Which philosophy flourished?",
                    "options": ["Stoicism", "Existentialism", "Scholasticism", "Postmodernism"],
                    "correctIndex": 0
                }
            ]
        },
        {
            "title": "Protestant Reformation",
            "definition": "16th-century religious movement challenging Catholic Church authority",
            "tags": ["Religion"],
            "difficulty": "medium",
            "description": "Martin Luther's 95 Theses (1517). Led to Lutheran, Calvinist, Anglican traditions. Counter-Reformation. Ended Western Christendom unity.",
            "questions": [{
                    "question": "Who started Reformation?",
                    "options": ["John Calvin", "Martin Luther", "Henry VIII", "Ulrich Zwingli"],
                    "correctIndex": 1
                },
                {
                    "question": "What did Luther nail to church door?",
                    "options": ["Excommunication notice", "95 Theses", "New Bible translation", "List of indulgences"],
                    "correctIndex": 1
                },
                {
                    "question": "Which English king broke with Rome?",
                    "options": ["Henry VII", "Henry VIII", "Edward VI", "James I"],
                    "correctIndex": 1
                },
                {
                    "question": "What was Catholic response called?",
                    "options": ["Inquisition", "Counter-Reformation", "Great Awakening", "Crusade"],
                    "correctIndex": 1
                },
                {
                    "question": "Which doctrine did Protestants reject?",
                    "options": ["Salvation by faith", "Priesthood of all believers", "Bible authority", "Indulgences"],
                    "correctIndex": 3
                }
            ]
        },
        {
            "title": "Qin Dynasty",
            "definition": "First imperial dynasty of China (221-206 BC) that unified the country",
            "tags": ["Asian History"],
            "difficulty": "hard",
            "description": "Qin Shi Huang standardized writing, currency, measurements. Built Terracotta Army. Legalist philosophy. Great Wall construction began.",
            "questions": [{
                    "question": "Who was first Qin emperor?",
                    "options": ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Ming Hongwu"],
                    "correctIndex": 0
                },
                {
                    "question": "What was buried with the emperor?",
                    "options": ["Golden Buddha", "Terracotta Army", "Jade suits", "Silk manuscripts"],
                    "correctIndex": 1
                },
                {
                    "question": "What philosophy guided Qin rule?",
                    "options": ["Confucianism", "Daoism", "Legalism", "Buddhism"],
                    "correctIndex": 2
                },
                {
                    "question": "What major project began under Qin?",
                    "options": ["Silk Road", "Grand Canal", "Great Wall", "Forbidden City"],
                    "correctIndex": 2
                },
                {
                    "question": "Why was dynasty short-lived?",
                    "options": ["Foreign invasion", "Harsh rule caused rebellions", "Economic collapse", "Natural disasters"],
                    "correctIndex": 1
                }
            ]
        },
        {
            "title": "Enlightenment",
            "definition": "Intellectual movement (17th-18th centuries) emphasizing reason and individualism",
            "tags": ["Philosophy"],
            "difficulty": "medium",
            "description": "Thinkers: Locke (natural rights), Voltaire (free speech), Montesquieu (separation of powers). Influenced American/French Revolutions.",
            "questions": [{
                    "question": "Which concept was Enlightenment ideal?",
                    "options": ["Divine right", "Social contract", "Feudalism", "Manifest destiny"],
                    "correctIndex": 1
                },
                {
                    "question": "Who wrote about separation of powers?",
                    "options": ["Locke", "Voltaire", "Montesquieu", "Rousseau"],
                    "correctIndex": 2
                },
                {
                    "question": "What did Voltaire champion?",
                    "options": ["Free speech", "Abolitionism", "Women's rights", "Public education"],
                    "correctIndex": 0
                },
                {
                    "question": "Which revolution was influenced?",
                    "options": ["American", "French", "Both", "Neither"],
                    "correctIndex": 2
                },
                {
                    "question": "What challenged Enlightenment?",
                    "options": ["Romanticism", "Socialism", "Both", "Neither"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Mongol Empire",
            "definition": "Largest contiguous land empire in history (13th-14th centuries)",
            "tags": ["Asian History"],
            "difficulty": "hard",
            "description": "Genghis Khan united tribes. Pax Mongolica enabled Silk Road trade. Tolerant of religions. Split into khanates, declined due to overexpansion.",
            "questions": [{
                    "question": "Who founded Mongol Empire?",
                    "options": ["Kublai Khan", "Genghis Khan", "Attila", "Tamerlane"],
                    "correctIndex": 1
                },
                {
                    "question": "What was Pax Mongolica?",
                    "options": ["Mongol religion", "Period of stability for trade", "Succession system", "Military strategy"],
                    "correctIndex": 1
                },
                {
                    "question": "Which dynasty did Mongols establish in China?",
                    "options": ["Tang", "Song", "Yuan", "Ming"],
                    "correctIndex": 2
                },
                {
                    "question": "What was unique about Mongol rule?",
                    "options": ["Religious tolerance", "Democratic elections", "Industrial development", "Naval supremacy"],
                    "correctIndex": 0
                },
                {
                    "question": "Why did empire decline?",
                    "options": ["Overexpansion", "Black Death", "Both", "Neither"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Great Depression",
            "definition": "Severe worldwide economic depression (1929-late 1930s)",
            "tags": ["Economics"],
            "difficulty": "medium",
            "description": "Triggered by 1929 stock crash. Global GDP fell 15%. New Deal programs. Ended with WWII production. Led to Keynesian economics and welfare states.",
            "questions": [{
                    "question": "What event started Great Depression?",
                    "options": ["1929 stock crash", "Dust Bowl", "Bank failures", "WWI reparations"],
                    "correctIndex": 0
                },
                {
                    "question": "Which US president introduced New Deal?",
                    "options": ["Herbert Hoover", "Franklin Roosevelt", "Calvin Coolidge", "Woodrow Wilson"],
                    "correctIndex": 1
                },
                {
                    "question": "What was unemployment rate at peak?",
                    "options": ["10%", "25%", "40%", "50%"],
                    "correctIndex": 1
                },
                {
                    "question": "What ended Great Depression?",
                    "options": ["New Deal", "WWII production", "Both", "Neither"],
                    "correctIndex": 2
                },
                {
                    "question": "Which economic theory gained prominence?",
                    "options": ["Keynesian", "Marxist", "Mercantilist", "Supply-side"],
                    "correctIndex": 0
                }
            ]
        },
        {
            "title": "Byzantine Empire",
            "definition": "Eastern Roman Empire continuation (330-1453) with capital at Constantinople",
            "tags": ["Medieval History"],
            "difficulty": "hard",
            "description": "Preserved Greek/Roman knowledge. Justinian Code influenced law. Eastern Orthodox Church. Fell to Ottomans. Hagia Sophia architectural marvel.",
            "questions": [{
                    "question": "What was Byzantine capital?",
                    "options": ["Rome", "Athens", "Constantinople", "Alexandria"],
                    "correctIndex": 2
                },
                {
                    "question": "Who codified Roman laws?",
                    "options": ["Constantine", "Justinian", "Theodora", "Basil II"],
                    "correctIndex": 1
                },
                {
                    "question": "Which church was Byzantine centerpiece?",
                    "options": ["St. Peter's", "Hagia Sophia", "Notre Dame", "Westminster Abbey"],
                    "correctIndex": 1
                },
                {
                    "question": "Who conquered Constantinople in 1453?",
                    "options": ["Mongols", "Arabs", "Ottomans", "Crusaders"],
                    "correctIndex": 2
                },
                {
                    "question": "What language did Byzantines speak?",
                    "options": ["Latin", "Greek", "Both", "Neither"],
                    "correctIndex": 1
                }
            ]
        },
        {
            "title": "Colonialism",
            "definition": "Practice of acquiring political control over other countries",
            "tags": ["Politics"],
            "difficulty": "medium",
            "description": "European powers (15th-20th centuries). Exploited resources, imposed cultures. Decolonization post-WWII. Legacy includes language spread and global inequality.",
            "questions": [{
                    "question": "Which was NOT a colonial power?",
                    "options": ["Britain", "France", "Switzerland", "Portugal"],
                    "correctIndex": 2
                },
                {
                    "question": "What was 'White Man's Burden'?",
                    "options": ["Colonial justification", "Slave ship conditions", "Opium trade", "Gold standard"],
                    "correctIndex": 0
                },
                {
                    "question": "When did major decolonization occur?",
                    "options": ["After WWI", "After WWII", "After Cold War", "After 9/11"],
                    "correctIndex": 1
                },
                {
                    "question": "Which continent was most colonized?",
                    "options": ["Asia", "Africa", "South America", "North America"],
                    "correctIndex": 1
                },
                {
                    "question": "What was lasting colonial impact?",
                    "options": ["Language spread", "Economic dependency", "Both", "Neither"],
                    "correctIndex": 2
                }
            ]
        },
        {
            "title": "Scientific Revolution",
            "definition": "Emergence of modern science (16th-17th centuries) with new ideas/methods",
            "tags": ["Science History"],
            "difficulty": "hard",
            "description": "Copernicus (heliocentrism), Galileo (telescope), Newton (calculus, physics). Empirical method replaced Aristotelianism. Basis for Industrial Revolution.",
            "questions": [{
                    "question": "Who proposed heliocentrism?",
                    "options": ["Galileo", "Copernicus", "Kepler", "Ptolemy"],
                    "correctIndex": 1
                },
                {
                    "question": "What did Galileo improve?",
                    "options": ["Microscope", "Telescope", "Barometer", "Thermometer"],
                    "correctIndex": 1
                },
                {
                    "question": "What did Newton formulate?",
                    "options": ["Theory of relativity", "Laws of motion", "Both", "Neither"],
                    "correctIndex": 1
                },
                {
                    "question": "What method replaced Aristotelianism?",
                    "options": ["Empirical", "Theological", "Dialectical", "Phenomenological"],
                    "correctIndex": 0
                },
                {
                    "question": "Which institution promoted new science?",
                    "options": ["Royal Society", "Vatican", "Both", "Neither"],
                    "correctIndex": 0
                }
            ]
        }
    ]
};