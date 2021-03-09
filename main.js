// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  const pAequorFactory = (num, arr) =>{
      return{
        specimen: num,
        dna: arr,
        mutate(){
            console.log(`Mutating specimen: ${this.specimen}, with bases: ${this.dna}`);
            let i = Math.floor(Math.random() * this.dna.length);
            let random = returnRandBase();
            while(random == dna[i]){
                console.log(`Bases are the same will return random base`);
                random = returnRandBase();
            }
            dna.splice(i, 1, random);
            console.log(`New DNA strand:${this.dna}`);
        },
        compareDNA(pAequor){
            let count = 0;
            for(let i = 0; i < this.dna.length; i++){
                if(i == 0){
                    console.log(`\nComparing DNA strands\nSpecimen${this.specimen}
                    bases:${this.dna}`);
                    console.log(`Specimen${pAequor.specimen} bases:${pAequor.dna}`);
                }
                if(this.dna[i] === pAequor.dna[i]){
                    console.log(this.dna[i] + ` and ` + pAequor.dna[i] + ` are equal`);
                    count += 1;
                    console.log(`Matching bases so far: ` + count);
                }
            }
            let baseCount = Math.floor((100/15)*count);
            return `Specimen #1 and specimen #2 have ${baseCount}% DNA in common.`
        },
        willLikelySurvive(){
            let counter = 0;
            for(let i =0; i < this.dna.length; i++){
                if(this.dna[i] == 'C' || this.dna[i] == 'G'){
                    counter += 1;
                }
            }
            return (counter >= 9); 
        },
        
        complementStrand(){
            let complement = [];
            for(let i = 0; i < this.dna.length; i++){
                if(this.dna[i] === 'A'){
                    complement.push('T')
                }
                else if(this.dna[i] === 'T'){
                    complement.push('A')
                }
                else if(this.dna[i] === 'C'){
                    complement.push('G')
                }
                else if(this.dna[i] === 'G'){
                    complement.push('C')
                }
                else{
                    complement.push(this.dna[i]);
                }
            }
            return `Generating a complementary strand, The original strand: ${this.dna}. 
            The complementary strand: ${complement}.`;
        }


      }
  };

  let instances = () => {
        let sampleArray = [];
        while(sampleArray.length < 30){
            let i = 1;
            let sample = pAequorFactory(i, mockUpStrand());
            sample = pAequorFactory(i, mockUpStrand());
            if(sample.willLikelySurvive()){
                sampleArray.push(sample.dna);
            }
            i++;
        }
        return sampleArray;
  };
  console.log(`Invoking the pool function (creating a pool of 30
    surviving samples) --`)
    console.log(instances());

    let testSubject = pAequorFactory(1, mockUpStrand());
    console.log(testSubject.complementStrand());