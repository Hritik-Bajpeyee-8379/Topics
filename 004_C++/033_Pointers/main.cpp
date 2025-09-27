#include <iostream>
using namespace std;

int main (){


    string name = "Hritik";
    int age = 17;

    string *pName = &name;
    int *pAge = &age;

    cout << *pName << '\n';
    cout << *pAge;

    return 0;
}