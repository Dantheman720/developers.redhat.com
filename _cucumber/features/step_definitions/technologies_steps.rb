Then(/^I should see the following main products sections:$/) do |table|
  on TechnologiesPage do |page|
    table.raw.each do |sections|
      section = sections.first
      expect(page.product_titles).to include section
    end
  end
end

Then(/^I should see a list of available products$/) do
  on TechnologiesPage do |page|
    page.available_products.should =~ @product_names
  end
end

Then(/^I should see a description of available products$/) do
  @product_ids.each do |product|
    on TechnologiesPage do |page|
      desc = page.product_description_for(product)
      desc.gsub("’", "'").should == get_product(product, 'description')
    end
  end
end

Then(/^each product title should link to the relevant product overview page$/) do
  @product_ids.each do |product|
    on TechnologiesPage do |page|
      expect(page.product_link_for(product)).to include "#{$host_to_test}/products/#{product}"
    end
  end
end

When(/^products have a Get Started link available$/) do
end

Then(/^I should see a 'Get started' button for each product$/) do
  @product_ids.each do |product|
    on TechnologiesPage do |page|
      if product == 'openjdk'
        expect(page.get_started_button_for(product)).to include "#{$host_to_test}/products/#{product}/overview"
      elsif @products_with_get_started.include?(product)
        expect(page.get_started_button_for(product)).to include "#{$host_to_test}/products/#{product}/get-started"
      elsif !@products_with_get_started.include?(product) && !@technologies_with_downloads.include?(product)
        expect(page.get_started_button_for(product)).to include "#{$host_to_test}/products/#{product}/overview"
      else
        expect(page.get_started_button_for(product)).to include "#{$host_to_test}/products/#{product}/download"
      end
    end
  end
end

When(/^products have a Learn link available$/) do
end

Then(/^I should see a 'Learn' link for each product$/) do
  @products_with_learn_link.each do |product|
    on TechnologiesPage do |page|
      expect(page.learn_link_for(product)).to include "#{$host_to_test}/products/#{product}/learn"
    end
  end
end

When(/^the products have Docs and API's available$/) do
end

Then(/^I should see a 'Docs and APIs' link for each product$/) do
  @products_with_docs.each do |product|
    on TechnologiesPage do |page|
      expect(page.docs_and_apis_for(product)).to include "#{$host_to_test}/products/#{product}/docs-and-apis"
    end
  end
end

When(/^the products have Downloads available$/) do
end

Then(/^I should see a 'Downloads' link for each product$/) do
  products_with_downloads = @technologies_with_downloads - ['mobileplatform', 'openjdk', 'dotnet']
  products_with_downloads.each do |product|
    on TechnologiesPage do |page|
      expect(page.download_button_for(product)).to include "#{$host_to_test}/products/#{product}/download"
    end
  end
end
