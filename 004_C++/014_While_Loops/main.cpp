#include<iostream>

int main (){

    using namespace std;

    string name;

    while(name.empty()){
        cout << "Enter Your Name ";
        getline(cin,name);
    }

    cout << "Hello " << name << endl;
    

    //fOR INFINITE LOOP
  /* while (1==1)
    {
        cout << "Fuck Off " << name << endl;
    }
    */



    return 0;
}