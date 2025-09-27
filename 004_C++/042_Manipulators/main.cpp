#include <iostream>
#include <iomanip>   // for setw, setfill, setprecision, etc.
using namespace std;

int main() {
    int num = 255;
    double pi = 3.1415926535;
    bool flag = true;

    cout << "=== Basic Manipulators ===" << endl;
    cout << "Default endl: Hello" << endl << "World" << endl;

    cout << "\n=== Width & Fill ===" << endl;
    cout << setw(10) << num << endl;                // width 10
    cout << setfill('*') << setw(10) << num << endl; // filled with '*'

    cout << "\n=== Precision & Format ===" << endl;
    cout << setprecision(3) << pi << endl;          // 5 total digits
    cout << fixed << setprecision(3) << pi << endl; // fixed decimal places
    cout << scientific << setprecision(2) << pi << endl; // scientific

    cout << "\n=== Number Systems ===" << endl;
    cout << dec << num << " (decimal)" << endl;
    cout << hex << num << " (hexadecimal)" << endl;
    cout << oct << num << " (octal)" << endl;

    cout << "\n=== Sign & Bool ===" << endl;
    cout << showpos << 25 << " with sign" << endl;
    cout << noshowpos << 25 << " without sign" << endl;
    cout << boolalpha << flag << " (boolalpha)" << endl;
    cout << noboolalpha << flag << " (noboolalpha)" << endl;

    cout << "\n=== Uppercase Hex ===" << endl;
    cout << uppercase << hex << num << endl;
    cout << nouppercase << hex << num << endl;

    return 0;
}




#include <iostream>
using namespace std;

int main() {
    cout << showpos << 25 << endl;   // will print +25
    cout << noshowpos << 25 << endl; // will print 25
    return 0;
}