cmake_minimum_required(VERSION 3.20)

project(knowledge_base_c_tests LANGUAGES C)

include(CTest)
enable_testing()

set(CMAKE_C_STANDARD 17)
set(CMAKE_C_STANDARD_REQUIRED ON)
set(CMAKE_C_EXTENSIONS OFF)

add_executable(test_logic test_logic.c)
target_compile_options(test_logic PRIVATE -Wall -Wextra -Wpedantic)

add_test(NAME logic COMMAND test_logic)
