#include<iostream>

int main(){

    using namespace std;
    

    //length() / size(): Returns the number of characters in the string.
    // string s = "Hello";
    // cout << s.size() << '\n';   // 5
    // cout << s.length();   // 5

    //empty(): Checks if the string is empty (returns true if yes).
    // string s = "";
    // cout << s.empty();    // 1 (true)


    // find(str): Returns the position of the first occurrence of a substring (or string::npos if not found).
    // string s = "apple pie";
    // cout << s.find("le");  // 6



    // compare(str): Compares two strings lexicographically.

    string a,b;
    cin >> a;
    cin >> b;
    cout << a.compare(b);   // negative value (a < b)
    return 0;
}