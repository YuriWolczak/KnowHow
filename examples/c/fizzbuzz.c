#include <assert.h>
#include <stdio.h>
#include <string.h>

static const char *fizzbuzz(int number) {
    if (number % 15 == 0) {
        return "FizzBuzz";
    }
    if (number % 3 == 0) {
        return "Fizz";
    }
    if (number % 5 == 0) {
        return "Buzz";
    }
    return "number";
}

int main(void) {
    assert(strcmp(fizzbuzz(15), "FizzBuzz") == 0);
    assert(strcmp(fizzbuzz(3), "Fizz") == 0);
    assert(strcmp(fizzbuzz(5), "Buzz") == 0);
    assert(strcmp(fizzbuzz(7), "number") == 0);
    printf("fizzbuzz: ok\n");
    return 0;
}
