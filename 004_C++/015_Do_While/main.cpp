#include <iostream>

int main (){
    using namespace std;
    int number;

    do
    {
        cout << "Enter a Positive number ";
        cin >> number;
    } while (number < 0);

    cout << number;
    

    return 0;
}