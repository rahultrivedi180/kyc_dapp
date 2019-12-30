<template>
  <div class="home">
    <form action="" id="kycfrm" @submit="encKyc">
      <div class="formField">
        <label for="fullname">Full Name: </label>
        <input type="text" name="fullname" id="fullname" v-model="name" required />
      </div>
      <div class="formField">
        <label for="birthdate">Birth Date: </label>
        <input type="text" name="birthdate" id="birthdate" v-model="bdate" required />
      </div>
      <div class="formField">
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" v-model="email" required />
      </div>
      <div class="formField">
        <label for="address">Address: </label>
        <input type="text" name="address" id="address" v-model="address" required />
      </div>
      <div class="formField">
        <label for="country">Country: </label>
        <input type="text" name="country" id="country" v-model="country" required />
      </div>
      <div class="formField">
        <label for="pin">Pin: </label>
        <input type="text" name="pin" id="pin" v-model="pin" required />
      </div>
      <div class="formField">
        <label for="mobile">Mobile: </label>
        <input type="text" name="mobile" id="mobile" v-model="mobile" required />
      </div>
      <div class="formField">
        <label for="idType">ID Type: </label>
        <input type="text" name="idType" id="idType" v-model="idType" required />
      </div>
      <div class="formField">
        <label for="idNumber">ID Number: </label>
        <input type="text" name="idNumber" id="idNumber" v-model="idNumber" required />
      </div>
      <div class="formBottom">
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </div>
    </form>
    <div id="encryptedData" v-if="encryptedData">
      <h1>Encrypted Data</h1>
      <p><b>Name: </b>: {{encryptedData.name}}</p>
      <p><b>Birth Date: </b>: {{encryptedData.bdate}}</p>
      <p><b>Email: </b>: {{encryptedData.email}}</p>
      <p><b>Address: </b>: {{encryptedData.address}}</p>
      <p><b>Country: </b>: {{encryptedData.country}}</p>
      <p><b>Pin: </b>: {{encryptedData.pin}}</p>
      <p><b>Mobile: </b>: {{encryptedData.mobile}}</p>
      <p><b>ID Type: </b>: {{encryptedData.idType}}</p>
      <p><b>ID Number: </b>: {{encryptedData.idNumber}}</p>
      <p><b>KYC ID: </b>: {{encryptedData.kycId}}</p>
    </div>
  </div>
</template>

<style scoped>
  .formField {
    margin: 20px;
  }
  .formBottom {
    width: 20%;
    display: flex;
    justify-content: space-around;
  }
</style>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      name: '',
      bdate: '',
      email: '',
      address: '',
      country: '',
      pin: '',
      mobile: '',
      idType: '',
      idNumber: '',
      kycId: '1',
      encryptedData: null
    }
  },
  async created() {
    console.log(await window.web3.eth.getAccounts())
  },
  methods: {
    async encKyc(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        bdate: this.bdate,
        email: this.email,
        address: this.address,
        country: this.country,
        pin: this.pin,
        mobile: this.mobile,
        idType: this.idType,
        idNumber: this.idNumber,
        kycId: this.kycId
      }
      const encKyc = await axios({
        url: 'http://localhost:3000/api/user/addkyc',
        method: 'POST',
        data
      });
      this.encryptedData = {}
      const encData = encKyc.data.data
      this.encryptedData.name = encData.name
      this.encryptedData.bdate = encData.bdate
      this.encryptedData.email = encData.email
      this.encryptedData.address = encData.address
      this.encryptedData.country = encData.country
      this.encryptedData.pin = encData.pin
      this.encryptedData.mobile = encData.mobile
      this.encryptedData.idType = encData.idType
      this.encryptedData.idNumber = encData.idNumber
      this.encryptedData.kycId = encData.kycId
    },
  },
}
</script>
