app.component("review-form",{

    template:
    /*html*/
    `
        <form class='review-form' @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label>Name:</label>
            <input id='name' v-model='name'>

            <label for='review'>Review:</label>
            <textarea id='review' v-model='review'></textarea>

            <label for='rating'>Rating:</label>
            <select id='rating' v-model.number='rating'>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label for='recommendation'>Recommendation:</label>
            <select id='recommendation' v-model='recommendation'>
                <option>Yes</option>
                <option>No</option>
            </select>

            <input class='button' type='submit' value='Submit'>
        
        </form>
    `,

    data(){
        return{
            name:"",
            review:"",
            rating:null,
            recommendation:''
        }
    },
    methods: {
        onSubmit(){

            if(this.name==='' || this.review === '' || this.rating === null){
                alert('Reivew is incomplete. Please fill out all fields.')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating, 
                recommendation: this.recommendation
            }

            // Send upward toward main.js
            this.$emit('review-submitted', productReview)
            
            // Set values back to blank when done
            this.name = '';
            this.review = "";
            this.rating = null;
            this.recommendation = null;

        }
    }

})