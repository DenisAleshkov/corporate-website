<template>
	<div class="contacts">
		<Header/>
		<ContactsForm/>
	</div>
</template>
<script>
	import Header from '@/components/Header/ContactsHeader';
	import ContactsForm from '@/components/Forms/ContactsForm';
	export default{
		components:{
			Header,
			ContactsForm
		}
	}
</script>	
