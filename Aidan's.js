

/* makeQuestion(conditions, maxDepth=3, negate=.2)
takes an array of condition objects formated {str: text, bool: bool, negated: bool}
and uses it make a question of depths between 1 - maxDepth combined statement length
it should randomly use and or ors at a 50% chance each
@param condition {array} an array of objects formatted as listed above
@param maxDepth {int} number of conditionals to be put together at max
@param negate {float} chance of a negation happening1*/
  function makeQuestion(condition, maxDepth=3,negate =.2){


  }
/* notEval(condition)
takes a condtion, negates it's value, adds the text "it is not the case that" to the
front of it, sets the negated key to true
@param condtion {object} an object with str and bool keys
@return {object} an object with str, bool, and negated keys
*/
function notEval(con){
  return {str:"It is not the case that" + con.str, con.bool:!con.bool,con.negated:!con.negated}
}
/* makeSentence(condition)
Makes a (likely run-on) sentence out of a conditional stored in an object with the keys str, bool, and negated. It does the following: if negated then it capitalized the i in "it is not the case" and adds a period to the end of the str. If it is not negated then it adds the phrase "It is the case " to the start of the str and adds a period to the end of the string.
@param condition {array} an array of objects formatted as listed above
@return {object} a new object with the same general format
*/
  function makeSen(){
    

  }
