// #include <iostream>

// void walk(int steps) {
//     if (steps > 0) {
//         walk(steps - 1);  // recursion first
//         std::cout << "You Take Step " << steps << '\n'; // print on return
//     }
// }

// int main() {
//     walk(10); // prints 1 to 10
//     return 0;
// }



// #include <iostream>

// // Recursive factorial function
// int factorial(int n) {
//     if (n <= 1) {         // Base case
//         return 1;
//     }
//     return n * factorial(n - 1);  // Recursive case
// }

// int main() {
//     int num;
//     std::cout << "Enter a number: ";
//     std::cin >> num;

//     std::cout << "Factorial of " << num << " = " << factorial(num) << '\n';

//     return 0;
// }



#include <iostream>
#include <vector>

// Big factorial using vector of digits
void bigFactorial(int n) {
    std::vector<int> result(1, 1); // Start with 1

    for (int x = 2; x <= n; x++) {
        int carry = 0;
        for (size_t i = 0; i < result.size(); i++) {
            int prod = result[i] * x + carry;
            result[i] = prod % 10;
            carry = prod / 10;
        }
        while (carry) {
            result.push_back(carry % 10);
            carry /= 10;
        }
    }

    std::cout << n << "! = ";
    for (auto it = result.rbegin(); it != result.rend(); ++it)
        std::cout << *it;
    std::cout << "\n";
}

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;

    if (num < 0) {
        std::cout << "Factorial is not defined for negative numbers.\n";
    } else {
        bigFactorial(num);
    }

    return 0;
}
