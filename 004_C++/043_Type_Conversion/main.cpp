#include<iostream>
using namespace std;

int main (){
    // int i = 3;
    // float f= 3.14;
    // string s ="num";
    // char c ='z';

    // cout<<"Int + Float :"<< i+f<<endl;
    // cout<<"Float + Int :"<< f+i<<endl;
    // cout<<"string + Int :"<< s+to_string(i)<<endl;
    // cout<<"Char to Int :"<< int(c)<<endl;


    //Static Cast

    int a =5,b=9;
    double result = static_cast<float>(a)/b;
    cout<<result;

   return 0;
}