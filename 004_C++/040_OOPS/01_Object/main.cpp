#include <iostream>
using namespace std;

class Human{
    public:
        string name;
        string Occupatiomn;
        int age;

        void eat(){
            cout << "This Person " <<name<< " Is Eating\n";
        }
        void drink(){
            cout << "This Person  " <<name<< " Is Drinking\n";
        }
        void sleep(){
            cout << "This Person  " <<name<< " Is Sleeping";
        }
};




int main (){

    Human human1;
    Human human2;
    


    human1.name = "Rick";
    human1.Occupatiomn = "Teacher";
    human1.age = 40;


    cout << human1.name<<'\n';
    cout << human1.Occupatiomn<<'\n';
    cout << human1.age<<'\n';

    human1.eat();
    human1.drink();
    human1.sleep();




    human2.name = "Mory";
    human2.Occupatiomn = "Student";
    human2.age = 20;


    cout << human2.name<<'\n';
    cout << human2.Occupatiomn<<'\n';
    cout << human2.age<<'\n';

    human2.eat();
    human2.drink();
    human2.sleep();

    return 0;
}