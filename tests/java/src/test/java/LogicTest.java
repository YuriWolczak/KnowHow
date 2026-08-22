import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class LogicTest {
    @Test
    void sumsDigitsIncludingZero() {
        assertEquals(0, Logic.sumOfDigits(0));
        assertEquals(12, Logic.sumOfDigits(507));
        assertEquals(27, Logic.sumOfDigits(999));
    }

    @Test
    void rejectsNegativeNumbersForDigitSum() {
        assertThrows(IllegalArgumentException.class, () -> Logic.sumOfDigits(-1));
    }

    @Test
    void identifiesPrimeNumbersAndBoundaries() {
        assertFalse(Logic.isPrime(0));
        assertFalse(Logic.isPrime(1));
        assertTrue(Logic.isPrime(2));
        assertTrue(Logic.isPrime(17));
        assertFalse(Logic.isPrime(21));
    }

    @Test
    void appliesFizzBuzzRulesInSpecificOrder() {
        assertEquals("Fizz", Logic.fizzBuzzLabel(3));
        assertEquals("Buzz", Logic.fizzBuzzLabel(5));
        assertEquals("FizzBuzz", Logic.fizzBuzzLabel(15));
        assertEquals("number", Logic.fizzBuzzLabel(7));
    }
}
