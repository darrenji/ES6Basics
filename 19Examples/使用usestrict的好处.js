/**
 * Created by Darren on 2017/9/8.
 */

// 在javascript运行时的时候，使用use strict可以有更严格的parsing和error handling

// 让调试更容易

// 不同use strict，给一个没有声明的变量赋值，这个变量默认属于全局变量。使用use strict后，变量没有声明，就会报错

//this是null和undefined的时候，处理更严格。如果没有用use strict, this是null和undefined的时候,this会自动指向全局；如果使用use strict，就会报错。

//变量重复审核更严格。使用use strict后如果变量名重复，就会报错。

// eval()更安全

// 不正确使用delete就会报错