#include <assert.h>
#include <stdbool.h>
#include <stdio.h>

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

int main(void) {
    assert(!is_prime(1U));
    assert(is_prime(2U));
    assert(is_prime(17U));
    assert(!is_prime(21U));
    printf("is_prime: ok\n");
    return 0;
}
