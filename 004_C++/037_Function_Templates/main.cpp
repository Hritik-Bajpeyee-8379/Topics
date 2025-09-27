#include <iostream>
#include <string>  // for std::string
using namespace std;

// Overloading Functions
int max(int x, int y) {
    return (x > y) ? x : y;
}
double max(double x, double y) {
    return (x > y) ? x : y;
}
char max(char x, char y) {
    return (x > y) ? x : y;
}

// Template function for generic comparison
template <typename T, typename U>
auto temp_Name(T x, U y) {
    return (x > y) ? x : y;
}

int main() {
    cout << max(10, 20) << endl;          // int
    cout << max(2.5, 5.5) << endl;        // double
    cout << max('a', 'z') << endl;        // char
    
    cout << temp_Name(100, 50) << endl;   // template with ints
    cout << temp_Name(3.5, 2) << endl;    // template with double + int
    
    // Proper string comparison
    cout << temp_Name(string("1"), string("2")) << endl;  

    return 0;
}
