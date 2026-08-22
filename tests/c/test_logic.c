#include <assert.h>
#include <stdbool.h>
#include <stdio.h>
#include <string.h>

static int sum_of_digits(unsigned int number) {
    int sum = 0;

    do {
        sum += (int)(number % 10U);
        number /= 10U;
    } while (number > 0U);

    return sum;
}

static bool is_prime(unsigned int number) {
    if (number < 2U) {
        return false;
    }

    for (unsigned int divisor = 2U; divisor <= number / divisor; divisor++) {
        if (number % divisor == 0U) {
            return false;
        }
    }

    return true;
}

static const char *fizzbuzz_label(int number) {
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

static void test_sum_of_digits(void) {
    assert(sum_of_digits(0U) == 0);
    assert(sum_of_digits(507U) == 12);
    assert(sum_of_digits(999U) == 27);
}

static void test_is_prime(void) {
    assert(!is_prime(0U));
    assert(!is_prime(1U));
    assert(is_prime(2U));
    assert(is_prime(17U));
    assert(!is_prime(21U));
}

static void test_fizzbuzz(void) {
    assert(strcmp(fizzbuzz_label(3), "Fizz") == 0);
    assert(strcmp(fizzbuzz_label(5), "Buzz") == 0);
    assert(strcmp(fizzbuzz_label(15), "FizzBuzz") == 0);
    assert(strcmp(fizzbuzz_label(7), "number") == 0);
}

int main(void) {
    test_sum_of_digits();
    test_is_prime();
    test_fizzbuzz();
    puts("C unit tests: ok");
    return 0;
}
