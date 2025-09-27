#include <iostream>
using namespace std;

struct student
{
    string name;
    double gpa;
    bool enrolled;
};

int main(){

    student student1;
    student1.name="Aditya";
    student1.gpa=34.5;
    student1.enrolled=true;

    cout<< student1.name<<"\n";
    cout<< student1.gpa<<"\n";
    cout<< student1.enrolled<<"\n";


    return 0;
}