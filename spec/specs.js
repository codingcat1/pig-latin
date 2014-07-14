describe('pigLatinTranslator', function() {
  it("returns ay at the end of a word if it starts with a vowel", function() {
    pigLatinTranslator("echo").should.eql("echoay");
  });
  it("returns word with beginning consonant at end with ay appended", function() {
    pigLatinTranslator("copper").should.eql("oppercay");
  });
  it("slices consecutive beginning consonants from word and appends at end followed by ay", function() {
    pigLatinTranslator("string").should.eql("ingstray");
  });
  it('treats "qu" as a consonant', function() {
    pigLatinTranslator("squeal").should.eql("ealsquay");
  });
  it('changes case to lower case', function() {
    pigLatinTranslator("RoBOT").should.eql("obotray");
  });
});
