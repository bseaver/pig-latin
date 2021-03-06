## Pig Latin

### Epicodus Week 3 lab on Behavior Driven Development (BDD)

### by Benjamin T. Seaver and David R. on 1/18/2017

#### Description: Practice Behavior Driven Development BDD to do an English to Pig Latin translator.

### Specifications:

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  #### Example Input: 3
  #### Example Output: 3

* The program adds "ay" to single-letter words beginning with a vowel.
  #### Example Input: i
  #### Example Output: iay

* The program adds "ay" to any single-letter words.
  #### Example Input: f
  #### Example Output: fay

* The program adds "ay" to any words beginning with a vowel.
  #### Example Input: input
  #### Example Output: inputay

* The program treats words that start with "y" as a consonant.
  #### Example Input: yay
  #### Example Output: ayyay

* The program treats "y" as a vowel when "y" is after the first letter.
  #### Example Input: bye
  #### Example Output: yebay

* The program moves the first letter to the end and adds ay if the first letter is a consonant.
  #### Example Input: tile
  #### Example Output: iletay

* Words that start with more than one consonants, the consecutive consonants are moved to the end followed by ay.
  #### Example Input: style
  #### Example Output: ylestay

* Words that start with qu, both the "q" and the "u" are moved to the back.
  #### Example Input: quiet
  #### Example Output: ietquay

* Words that start with one or more consonants followed by "qu", the "qu" is included with the leading consonants and moved to the back.
  #### Example Input: squeal
  #### Example Output: ealsquay

* Words that end in punctuation like ".,;:?!", have the punctuation removed then added back after the ay.
  #### Example Input: bang.
  #### Example Output: angbay.

* Words that have only the first letter capitalized, have the resulting ay word's first letter capitalized and the rest lower cased.
  #### Example Input: Portland
  #### Example Output: Ortlandpay

* Words that are in all CAPS stay in all CAPS.
  #### Example Input: PORTLAND
  #### Example Output: ORTLANDPAY

* Words containing more than one capital, the letters stay the same case they were.
  #### Example Input: PoRtLaND
  #### Example Output: oRtLaNDPay

* Words joined by a dash are treated as separate words and rejoined by a dash.
  #### Example Input: Never-the-less
  #### Example Output: Evernay-ethay-esslay

### Technologies Used

* HTML, CSS, JavaScript
* jQuery
* Bootstrap
* git

### setup

* Clone repository
* Open index.html

### See on GitHub.io

[https://bseaver.github.io/pig-latin/](https://bseaver.github.io/pig-latin/)

### Known Issues

* None

### Support

* None

### Copyright

* Benjamin T. Seaver, David R.

### license

* MIT
