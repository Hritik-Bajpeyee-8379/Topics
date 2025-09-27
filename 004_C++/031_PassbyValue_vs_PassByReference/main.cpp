#include <iostream>
using namespace std;

// Pass by value ( Copying changes not originall one)
void swap(string x, string y)
{

    string temp;

    temp = x;
    x = y;
    y = temp;
}
// Pass by reference (  changes  originall one)
void swap1(string &x, string &y)
{

    string temp;

    temp = x;
    x = y;
    y = temp;
}

int main()
{

    string x = "Colling";
    string y = "Water";

    cout << "Pass By Value" << endl;

    swap(x, y);

    cout << "X: " << x << '\n'
         << "Y: " << y << endl;

    cout << "Pass By Reference" << endl;
    swap1(x, y);

    cout << "X: " << x << '\n'
         << "Y: " << y << endl;

    return 0;
}