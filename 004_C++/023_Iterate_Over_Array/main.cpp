#include<iostream>
using namespace std;

int main (){

    string student [] ={"Hritik","Nikhil","Anjali","Amisha","Abhinash","Aditya","Vikash"};
    for (int i = 0; i < sizeof(student)/sizeof(string); i++)
    {
       cout << student[i]<< endl;
    }
    

    return 0;
}